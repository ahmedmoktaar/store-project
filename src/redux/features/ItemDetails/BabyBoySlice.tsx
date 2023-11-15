import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ItemValues,
  itemInitialValues,
} from "../../../assets/data/GlobalVariables";

const initialState = [itemInitialValues];

const babyBoySlice = createSlice({
  initialState,
  name: "babyBoy",
  reducers: {
    babyBoyAdd: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default babyBoySlice.reducer;

export const { babyBoyAdd } = babyBoySlice.actions;
