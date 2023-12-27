import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SignUpValues,
  CustomerStateInitialValue,
} from "../../../../assets/data/GlobalVariables";

interface PayloadActionValues {
 customerState: boolean;
 customerDetails: SignUpValues;
}

const initialState = CustomerStateInitialValue;

const customerStateSlice = createSlice({
  name: "CustomersLogState",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<PayloadActionValues>) => {
      state.customerState = true;
      state.customerDetails = action.payload.customerDetails;
    }, 
    logout: (state) => {
      state.customerState = false;
      state.customerDetails = initialState.customerDetails;
    },
  },
});

export default customerStateSlice.reducer;
export const { login, logout } = customerStateSlice.actions;
