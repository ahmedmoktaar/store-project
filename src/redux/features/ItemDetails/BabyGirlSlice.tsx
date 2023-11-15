import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ItemValues,
  itemInitialValues,
} from "../../../assets/data/GlobalVariables";

const initialState = [itemInitialValues];

const babyGirlSlice = createSlice({
  initialState,
  name: "babyGirl",
  reducers: {
    babyGirlAdd: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default babyGirlSlice.reducer;

export const { babyGirlAdd } = babyGirlSlice.actions;
