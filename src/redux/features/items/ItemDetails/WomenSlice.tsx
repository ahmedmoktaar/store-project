import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemValues } from "../../../../assets/data/GlobalVariables";
import { womenDefaultProducts } from "../../../../assets/data/DefaultProducts";

// ------------------
// initial State type
// ------------------
interface initialState {
  Products: ItemValues[];
  Categories: string[];
}

// ------------------
// initial State 
// ------------------
const initialState: initialState = {
  Products: [...womenDefaultProducts],
  Categories: [],
};

// ------------------
// Main Component
// ------------------
const womanSlice = createSlice({
  initialState,
  name: "women",
  reducers: {
    womenAddProduct: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      actionPayLoad.id =
        state.Products[state.Products.length - 1].id + 1;
      state.Products.push(actionPayLoad);
    },

    womenInitialCategories: (state, action: PayloadAction<string[]>) => {
      state.Categories = action.payload;
    },

    womenArrangeCategories: (state, action: PayloadAction<number>) => {
      const restItems = state.Categories
        .slice(0, action.payload)
        .concat(state.Categories.slice(action.payload + 1));
      state.Categories = [
        state.Categories[action.payload],
        ...restItems,
      ];
    },
  },
});

export default womanSlice.reducer;

export const { womenAddProduct,womenInitialCategories,womenArrangeCategories } = womanSlice.actions;
