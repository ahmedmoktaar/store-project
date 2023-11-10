import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SignUpInitialValues,
  SignUpValues,
} from "../../../components/GlobalVariables";

const initialState = SignUpInitialValues;

const sellerDetailsSlice = createSlice({
  name: "sellerDetails",
  initialState,
  reducers: {
    addSellerDetails: (state, action: PayloadAction<SignUpValues>) => {
      const actionPayLoad = action.payload;
      Object.entries(actionPayLoad).forEach(([key, value]) => {
        if (Object.prototype.hasOwnProperty.call(state, key)) {
          state[key as keyof SignUpValues] = value;
        }
      });
    },
  },
});

export default sellerDetailsSlice.reducer;
export const { addSellerDetails } = sellerDetailsSlice.actions;
