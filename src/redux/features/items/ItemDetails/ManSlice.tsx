import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemValues } from "../../../../assets/data/GlobalVariables";
import { maleProducts } from "../../../../assets/data/DefaultProducts";

const initialState = [...maleProducts];

const manSlice = createSlice({
  initialState,
  name: "men",
  reducers: {
    manAdd: (state, action: PayloadAction<ItemValues>) => {
      const actionPayLoad = action.payload;
      actionPayLoad.id = state[state.length - 1].id + 1;
      state.push(actionPayLoad);
    },
  },
});

export default manSlice.reducer;

export const { manAdd } = manSlice.actions;
