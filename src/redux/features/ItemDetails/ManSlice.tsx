import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ItemValues,
  itemInitialValues,
} from "../../../assets/data/GlobalVariables";
import { maleProducts } from "../../../assets/data/DefaultProducts";

const initialState = [itemInitialValues , ...maleProducts];

const manSlice = createSlice({
  initialState,
  name: "men",
  reducers: {
    manAdd: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default manSlice.reducer;

export const { manAdd } = manSlice.actions;
