import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ItemWithOrderID,
  cartInitialState,
  cartInitialStateType,
} from "../../../assets/data/GlobalVariables";

// ------------------
// initial State
// ------------------
const initialState: ItemWithOrderID[] = [{ ...cartInitialState, orderID: 0 }];

// ------------------
// Main Component
// ------------------
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<cartInitialStateType>) => {
      const actionPayLoad = { ...action.payload, orderID: 0 };
      actionPayLoad.orderID = state[state.length - 1].orderID + 1;
      state.push(actionPayLoad);
    },

    removeItemFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((editedItem) => editedItem.orderID != action.payload);
    },
  },
});

export default cart.reducer;
export const { addItemToCart, removeItemFromCart } = cart.actions;
