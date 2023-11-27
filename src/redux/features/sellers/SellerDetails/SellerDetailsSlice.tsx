import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AdminDetails,
  SignUpValues,
} from "../../../../assets/data/GlobalVariables";

const initialState = AdminDetails;

const sellerDetailsSlice = createSlice({
  name: "sellerDetails",
  initialState,
  reducers: {
    addSellerDetails: (state, action: PayloadAction<SignUpValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default sellerDetailsSlice.reducer;
export const { addSellerDetails } = sellerDetailsSlice.actions;
