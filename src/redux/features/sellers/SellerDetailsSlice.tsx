import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AdminDetails, SignUpValues } from "../../../assets/data/GlobalVariables";
import { v4 as uuid } from "uuid";

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
      const newSellerID = uuid();
      if (state.some((seller) => seller.id === newSellerID)) {
        actionPayLoad.id = newSellerID + 1;
      } else {
        actionPayLoad.id = newSellerID;
      }


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
export const { addSellerDetails, login, logout } = sellerDetailsSlice.actions;
