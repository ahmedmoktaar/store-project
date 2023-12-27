import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ProductValues,
  StoreCategories,
  productInitialValues,
} from "../../../assets/data/GlobalVariables";
import {
  babyDefaultProducts,
  menDefaultProducts,
  womenDefaultProducts,
} from "../../../assets/data/DefaultProducts";

// ------------------
// initial State type
// ------------------
interface InitialState {
  sellersProducts: {
    sellerEmail: string;
    sellerProduct: {
      men: ProductValues[];
      women: ProductValues[];
      baby: ProductValues[];
    };
  }[];

  productsCategories: { men: string[]; women: string[]; baby: string[] };
}

// ------------------------------------------
// AddProduct payload actions type
// ------------------------------------------
interface AddProductPayload {
  product: ProductValues;
  storeCategory: StoreCategories;
  sellerEmail: string | undefined;
}

// ------------------------------------------
// initialCategories payload actions type
// ------------------------------------------
interface InitialCategoriesPayload {
  storeCategory: StoreCategories;
  categories: string[];
}

// ------------------------------------------
// initialCategories payload actions type
// ------------------------------------------
interface ArrangeCategoriesPayload {
  index: number;
  storeCategory: StoreCategories;
}

// ------------------
// initial State
// ------------------
const initialState: InitialState = {
  sellersProducts: [
    {
      sellerEmail: "admin@example.com",
      sellerProduct: {
        men: [...menDefaultProducts],
        women: [...womenDefaultProducts],
        baby: [...babyDefaultProducts],
      },
    },
  ],
  productsCategories: { men: [], women: [], baby: [] },
};

// ------------------
// Main Component
// ------------------
const productsSlice = createSlice({
  initialState,
  name: "storeProducts",
  reducers: {
    addProduct: (state, action: PayloadAction<AddProductPayload>) => {
      const { storeCategory, product, sellerEmail } = action.payload;
      const activeSellerIndex = state.sellersProducts.findIndex(
        (sellerProducts) => sellerProducts.sellerEmail === sellerEmail
      );

      product.id =
        state.sellersProducts[activeSellerIndex].sellerProduct[storeCategory][
          state.sellersProducts[activeSellerIndex].sellerProduct[storeCategory].length - 1
        ].id + 1;

      state.sellersProducts[activeSellerIndex].sellerProduct[storeCategory].push(product);
    },

    addNewSellerProducts: (state, action: PayloadAction<string>) => {
      const sellerEmail = action.payload;
      const sellerIndex = state.sellersProducts.length;
      const sellerProducts = {
        men: [productInitialValues],
        women: [productInitialValues],
        baby: [productInitialValues],
      };

      sellerProducts.men[0].id = sellerIndex + 100000000;
      sellerProducts.women[0].id = sellerIndex + 200000000;
      sellerProducts.baby[0].id = sellerIndex + 300000000;

      const newSeller = {
        sellerEmail: sellerEmail,
        sellerProduct: sellerProducts,
      };

      state.sellersProducts.push(newSeller);
    },

    initialCategories: (state, action: PayloadAction<InitialCategoriesPayload>) => {
      const { storeCategory, categories } = action.payload;

      state.productsCategories[storeCategory] = categories;
    },

    arrangeCategories: (state, action: PayloadAction<ArrangeCategoriesPayload>) => {
      const { storeCategory, index } = action.payload;
      const restCategories = state.productsCategories[storeCategory]
        .slice(0, index)
        .concat(state.productsCategories[storeCategory].slice(index + 1));

      state.productsCategories[storeCategory] = [
        state.productsCategories[storeCategory][index],
        ...restCategories,
      ];
    },
  },
});

export default productsSlice.reducer;

export const {
  addProduct,
  addNewSellerProducts,
  initialCategories,
  arrangeCategories,
} = productsSlice.actions;
