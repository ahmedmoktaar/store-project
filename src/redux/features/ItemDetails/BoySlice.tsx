import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ItemValues,
  itemInitialValues,
} from "../../../assets/data/GlobalVariables";

const initialState = [itemInitialValues];

const boySlice = createSlice({
  initialState,
  name: "boy",
  reducers: {
    boyAdd: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default boySlice.reducer;

export const { boyAdd } = boySlice.actions;
