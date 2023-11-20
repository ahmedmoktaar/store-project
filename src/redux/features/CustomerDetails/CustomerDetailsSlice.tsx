import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AdminDetails,
  SignUpValues,
} from "../../../assets/data/GlobalVariables";

const initialState = AdminDetails;

const customerDetailsSlice = createSlice({
  name: "customerDetails",
  initialState,
  reducers: {
    addCustomerDetails: (state, action: PayloadAction<SignUpValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default customerDetailsSlice.reducer;
export const { addCustomerDetails } = customerDetailsSlice.actions;
