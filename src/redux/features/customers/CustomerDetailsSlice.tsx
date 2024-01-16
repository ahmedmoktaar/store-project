import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AdminDetails, SignUpValues } from "../../../assets/data/GlobalVariables";
import { v4 as uuid } from "uuid";
import { set as idbSet, clear as idbClear, createStore } from "idb-keyval";

// ------------------
// initial State
// ------------------
const initialState = [AdminDetails];

// ------------------
// IDB user store
// ------------------
const userState = createStore("user", "active");

// ------------------
// Main Component
// ------------------
const customersDetailsSlice = createSlice({
  name: "customersDetails",
  initialState,
  reducers: {
    addCustomerDetails: (state, action: PayloadAction<SignUpValues>) => {
      const actionPayLoad = action.payload;
      const newCustomerID = uuid();
      if (state.some((customer) => customer.id === newCustomerID)) {
        actionPayLoad.id = newCustomerID + 1;
      } else {
        actionPayLoad.id = newCustomerID;
      }

      state.push(actionPayLoad);
    },

    login: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((customer) => customer.email === action.payload);
      state[index].isActive = true;

      idbSet(`1`, `${action.payload}`, userState);
    },

    logout: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((customer) => customer.email === action.payload);
      state[index].isActive = false;
      idbClear(userState);
      idbClear();
    },
  },
});

export default customersDetailsSlice.reducer;
export const { addCustomerDetails, login, logout } = customersDetailsSlice.actions;
