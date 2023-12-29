import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  cartInitialValue,
  ProductInCartType,
} from "../../../assets/data/GlobalVariables";

// ------------------
// initial State type
// ------------------
interface CartType {
  customerEmail: string;
  customerCart: ProductInCartType[];
}

// ------------------------------------------
// addProductToCart payload actions type
// ------------------------------------------
interface AddProductPayload {
  customerEmail: string | null;
  product?: ProductInCartType;
  products?: ProductInCartType[];
}

// ------------------------------------------
// removeProductFromCart payload actions type
// ------------------------------------------
interface RemoveProductPayload {
  customerEmail: string | null;
  orderID: number;
}

// ------------------
// initial State
// ------------------
const initialState: CartType[] = [
  {
    customerEmail: "admin@example.com",
    customerCart: [{ ...cartInitialValue }],
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
      const { product, customerEmail, products } = action.payload;

      if (customerEmail) {
        const activeSellerIndex = state.findIndex(
          (customer) => customer.customerEmail === customerEmail
        );
        if (activeSellerIndex === -1 && products) {
          const newCustomer = {
            customerEmail: customerEmail,
            customerCart: products,
          };

          state.push(newCustomer);
        } else if (product) {
          product.orderID = state[activeSellerIndex].customerCart.length;

          state[activeSellerIndex].customerCart.push(product);
        }
      } else if (product) {
        product.orderID = state[0].customerCart.length;

        state[0].customerCart.push(product);
      }
    },

    removeProductFromCart: (state, action: PayloadAction<RemoveProductPayload>) => {
      const { orderID, customerEmail } = action.payload;

      if (state.length > 1 && customerEmail) {
        const activeSellerIndex = state.findIndex(
          (customer) => customer.customerEmail === customerEmail
        );
        const customerProducts = state[activeSellerIndex].customerCart.filter(
          (editedProduct) => editedProduct.orderID != orderID
        );

        state[activeSellerIndex] = {
          customerCart: customerProducts,
          customerEmail: customerEmail,
        };
      } else {
        const customerProducts = state[0].customerCart.filter(
          (editedProduct) => editedProduct.orderID != orderID
        );

        state[0] = {
          customerCart: customerProducts,
          customerEmail: customerEmail || initialState[0].customerEmail,
        };
      }
    },
  },
});

export default cart.reducer;
export const { addProductToCart, removeProductFromCart } = cart.actions;
