import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ItemValues,
  itemInitialValues,
} from "../../../assets/data/GlobalVariables";

const initialState = [itemInitialValues];

const womanSlice = createSlice({
  initialState,
  name: "women",
  reducers: {
    womanAdd: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default womanSlice.reducer;

export const { womanAdd } = womanSlice.actions;
