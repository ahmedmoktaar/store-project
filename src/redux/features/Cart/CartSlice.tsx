import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  cartInitialValue,
  PaymentInfo,
  PaymentInfoInitial,
  ProductInCartType,
  ShippingInfo,
  ShippingInfoInitial,
} from "../../../assets/data/GlobalVariables";
import { set as idbSet, del as idbDel } from "idb-keyval";
// ------------------
// initial State type
// ------------------
interface CartType {
  customerID: string;
  customerCart: ProductInCartType[];
  checkout: {
    shippingInfo: ShippingInfo;
    paymentInfo: PaymentInfo;
  };
}

// ------------------------------------------
// addProductToCart payload actions type
// ------------------------------------------
interface AddProductPayload {
  customerID: string | null;
  product?: ProductInCartType;
  products?: ProductInCartType[];
}
// ------------------------------------------
// UpdateCartsFromIDB payload actions type
// ------------------------------------------
interface UpdateCartsFromIDBPayload {
  customerID: string | null;
  products: ProductInCartType[];
}

// ------------------------------------------
// removeProductFromCart payload actions type
// ------------------------------------------
interface RemoveProductPayload {
  customerID: string | null;
  orderID: number;
}

// ------------------------------------------
// SaveShipping payload actions type
// ------------------------------------------
interface SaveShippingPayload {
  customerID: string;
  ShippingInfo: ShippingInfo;
}

// ------------------------------------------
// SavePayment payload actions type
// ------------------------------------------
interface SavePaymentPayload {
  customerID: string;
  PaymentInfo: PaymentInfo;
}

// ------------------
// initial State
// ------------------
const initialState: CartType[] = [
  {
    customerID: "admin",
    customerCart: [{ ...cartInitialValue }],
    checkout: { shippingInfo: ShippingInfoInitial, paymentInfo: PaymentInfoInitial },
  },
];

// ------------------
// Main Component
// ------------------
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<AddProductPayload>) => {
      const { product, customerID, products } = action.payload;
      if (customerID) {
        const activeSellerIndex = state.findIndex((customer) => customer.customerID === customerID);
        if (activeSellerIndex === -1 && products) {
          const newCustomer = {
            customerID: customerID,
            customerCart: products,
            checkout: {
              shippingInfo: ShippingInfoInitial,
              paymentInfo: PaymentInfoInitial,
            },
          };

          state.push(newCustomer);
        } else if (product) {
          product.orderID = state[activeSellerIndex].customerCart.length + 1;

          state[activeSellerIndex].customerCart.push(product);
          idbSet(`${product.orderID}`, product);
        }
      } else if (product) {
        product.orderID = state[0].customerCart.length + 1;

        state[0].customerCart.push(product);
        idbSet(`${product.orderID}`, product);
      }
    },

    removeProductFromCart: (state, action: PayloadAction<RemoveProductPayload>) => {
      const { orderID, customerID } = action.payload;

      idbDel(orderID.toString());

      if (state.length > 1 && customerID) {
        const activeSellerIndex = state.findIndex((customer) => customer.customerID === customerID);
        const customerProducts = state[activeSellerIndex].customerCart.filter(
          (editedProduct) => editedProduct.orderID != orderID
        );

        state[activeSellerIndex] = {
          customerCart: customerProducts,
          customerID: customerID,
          checkout: {
            shippingInfo: ShippingInfoInitial,
            paymentInfo: PaymentInfoInitial,
          },
        };
      } else {
        const customerProducts = state[0].customerCart.filter(
          (editedProduct) => editedProduct.orderID != orderID
        );

        state[0] = {
          customerCart: customerProducts,
          customerID: customerID || initialState[0].customerID,
          checkout: {
            shippingInfo: ShippingInfoInitial,
            paymentInfo: PaymentInfoInitial,
          },
        };
      }
    },

    updateCartFromIDB: (state, action: PayloadAction<UpdateCartsFromIDBPayload>) => {
      const { customerID, products } = action.payload;

      if (customerID) {
        const activeSellerIndex = state.findIndex((customer) => customer.customerID === customerID);
        if (activeSellerIndex === -1) {
          state[0].customerCart = products;
        } else {
          state[activeSellerIndex].customerCart = products;
        }
      }
    },

    saveShippingInfo: (state, action: PayloadAction<SaveShippingPayload>) => {
      const { ShippingInfo, customerID } = action.payload;
      const activeSellerIndex = state.findIndex((customer) => customer.customerID === customerID);

      state[activeSellerIndex].checkout.shippingInfo = ShippingInfo;
    },
    savePaymentInfo: (state, action: PayloadAction<SavePaymentPayload>) => {
      const { PaymentInfo, customerID } = action.payload;
      const activeSellerIndex = state.findIndex((customer) => customer.customerID === customerID);

      state[activeSellerIndex].checkout.paymentInfo = PaymentInfo;
    },
  },
});

export default cart.reducer;
export const {
  updateCartFromIDB,
  addProductToCart,
  removeProductFromCart,
  savePaymentInfo,
  saveShippingInfo,
} = cart.actions;
