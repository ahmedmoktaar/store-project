import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AdminDetails,
  SignUpValues,
} from "../../../../assets/data/GlobalVariables";

const initialState = [AdminDetails];

const customersDetailsSlice = createSlice({
  name: "customersDetails",
  initialState,
  reducers: {
    addCustomerDetails: (state, action: PayloadAction<SignUpValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default customersDetailsSlice.reducer;
export const { addCustomerDetails } = customersDetailsSlice.actions;
