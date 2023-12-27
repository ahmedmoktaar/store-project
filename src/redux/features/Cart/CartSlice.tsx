import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ProductWithOrderID,
  cartInitialState,
  cartInitialStateType,
} from "../../../assets/data/GlobalVariables";

// ------------------
// initial State
// ------------------
const initialState: ProductWithOrderID[] = [{ ...cartInitialState, orderID: 0 }];

// ------------------
// Main Component
// ------------------
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<cartInitialStateType>) => {
      const actionPayLoad = { ...action.payload, orderID: 0 };
      actionPayLoad.orderID = state[state.length - 1].orderID + 1;
      state.push(actionPayLoad);
    },

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((editedProduct) => editedProduct.orderID != action.payload);
    },
  },
});

export default cart.reducer;
export const { addProductToCart, removeProductFromCart } = cart.actions;
