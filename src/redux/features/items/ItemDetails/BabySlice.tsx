import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ItemValues,
  itemInitialValues,
} from "../../../../assets/data/GlobalVariables";

const initialState = [itemInitialValues];

const babySlice = createSlice({
  initialState,
  name: "baby",
  reducers: {
    babyAdd: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default babySlice.reducer;

export const { babyAdd } = babySlice.actions;
