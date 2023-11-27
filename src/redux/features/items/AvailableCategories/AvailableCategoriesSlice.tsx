import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const availableCategoriesSlice = createSlice({
  initialState,
  name: "availableCategories",
  reducers: {
    initialAvailableCategories: (_state, action: PayloadAction<string[]>) => {
      return action.payload;
    },
    availableCategories: (state, action: PayloadAction<number>) => {
      const restItems = state
        .slice(0, action.payload)
        .concat(state.slice(action.payload +1 ));
        
      return [state[action.payload], ...restItems];
    },
  },
});

export default availableCategoriesSlice.reducer;

export const { availableCategories, initialAvailableCategories } =
  availableCategoriesSlice.actions;
