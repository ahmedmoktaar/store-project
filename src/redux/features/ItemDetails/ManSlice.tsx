import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ItemValues,
  itemInitialValues,
} from "../../../assets/data/GlobalVariables";

const initialState = [itemInitialValues];

const manSlice = createSlice({
  initialState,
  name: "man",
  reducers: {
    manAdd: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default manSlice.reducer;

export const { manAdd } = manSlice.actions;
