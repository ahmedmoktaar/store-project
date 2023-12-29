import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AdminDetails,
  SignUpValues,
} from "../../../assets/data/GlobalVariables";

const initialState = [AdminDetails];

// ------------------
// Main Component
// ------------------
const sellerDetailsSlice = createSlice({
  name: "sellersDetails",
  initialState,
  reducers: {
    addSellerDetails: (state, action: PayloadAction<SignUpValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },

    login: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((seller) => seller.email === action.payload);
      state[index].isActive = true;
    },

    logout: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((seller) => seller.email === action.payload);
      state[index].isActive = false;
    },
  },
});

export default sellerDetailsSlice.reducer;
export const { addSellerDetails, login, logout } =
  sellerDetailsSlice.actions;
