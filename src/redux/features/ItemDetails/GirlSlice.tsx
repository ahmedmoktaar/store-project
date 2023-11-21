import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ItemValues,
  itemInitialValues,
} from "../../../assets/data/GlobalVariables";

const initialState = [itemInitialValues];

const girlSlice = createSlice({
  initialState,
  name: "girls",
  reducers: {
    girlAdd: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default girlSlice.reducer;

export const { girlAdd } = girlSlice.actions;
