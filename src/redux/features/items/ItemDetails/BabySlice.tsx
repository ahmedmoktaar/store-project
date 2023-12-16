import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemValues } from "../../../../assets/data/GlobalVariables";
import { babyDefaultProducts } from "../../../../assets/data/DefaultProducts";

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
  Products: [...babyDefaultProducts],
  Categories: [],
};

// ------------------
// Main Component
// ------------------
const babySlice = createSlice({
  initialState,
  name: "baby",
  reducers: {
    babyAddProduct: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      actionPayLoad.id = state.Products[state.Products.length - 1].id + 1;
      state.Products.push(actionPayLoad);
    },

    babyInitialCategories: (state, action: PayloadAction<string[]>) => {
      state.Categories = action.payload;
    },

    babyArrangeCategories: (state, action: PayloadAction<number>) => {
      const restItems = state.Categories.slice(0, action.payload).concat(
        state.Categories.slice(action.payload + 1)
      );
      state.Categories = [state.Categories[action.payload], ...restItems];
    },
  },
});

export default babySlice.reducer;

export const { babyAddProduct, babyInitialCategories, babyArrangeCategories } =
  babySlice.actions;
