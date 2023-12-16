import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemValues } from "../../../../assets/data/GlobalVariables";
import { menDefaultProducts } from "../../../../assets/data/DefaultProducts";

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
  Products: [...menDefaultProducts],
  Categories: [],
};

// ------------------
// Main Component
// ------------------
const manSlice = createSlice({
  initialState,
  name: "men",
  reducers: {
    menAddProduct: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      actionPayLoad.id = state.Products[state.Products.length - 1].id + 1;
      state.Products.push(actionPayLoad);
    },

    menInitialCategories: (state, action: PayloadAction<string[]>) => {
      state.Categories = action.payload;
    },

    menArrangeCategories: (state, action: PayloadAction<number>) => {
      const restItems = state.Categories.slice(0, action.payload).concat(
        state.Categories.slice(action.payload + 1)
      );
      state.Categories = [state.Categories[action.payload], ...restItems];
    },
  },
});

export default manSlice.reducer;

export const { menAddProduct, menInitialCategories, menArrangeCategories } =
  manSlice.actions;
