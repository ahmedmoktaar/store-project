import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  itemInitialValues,
  ItemValues,
} from "../../../assets/data/GlobalVariables";

interface ItemInCart extends ItemValues {
  amount: string;
}
const initialState = [{ ...itemInitialValues, amount: "" }];

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ItemInCart>) => {
      const actionPayLoad = action.payload;
      state.push(actionPayLoad);
    },
  },
});

export default cart.reducer;
export const { addItemToCart } = cart.actions;
