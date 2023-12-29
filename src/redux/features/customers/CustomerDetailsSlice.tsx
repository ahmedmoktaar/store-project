import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AdminDetails, SignUpValues } from "../../../assets/data/GlobalVariables";

// ------------------
// initial State
// ------------------
const initialState = [AdminDetails];

// ------------------
// Main Component
// ------------------
const customersDetailsSlice = createSlice({
  name: "customersDetails", 
  initialState,
  reducers: {
    addCustomerDetails: (state, action: PayloadAction<SignUpValues>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    }, 
 
    login: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((customer) => customer.email === action.payload);
      state[index].isActive = true;
    },

    logout: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((customer) => customer.email === action.payload);
      state[index].isActive = false;
    },
  },
});

export default customersDetailsSlice.reducer;
export const { addCustomerDetails, login, logout } = customersDetailsSlice.actions;
