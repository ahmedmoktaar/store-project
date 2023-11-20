import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SignUpValues,
  SellerStateInitialValue,
} from "../../../assets/data/GlobalVariables";

interface PayloadActionValues {
  sellerState: boolean;
  sellerDetails: SignUpValues;
}

const initialState = SellerStateInitialValue;

const sellerStateSlice = createSlice({
  name: "SellerLogState",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<PayloadActionValues>) => {
      state.sellerState = true;
      state.sellerDetails = action.payload.sellerDetails;
    }, 
    logout: (state) => {
      state.sellerState = false;
      state.sellerDetails = initialState.sellerDetails;
    },
  },
});

export default sellerStateSlice.reducer;
export const { login, logout } = sellerStateSlice.actions;
