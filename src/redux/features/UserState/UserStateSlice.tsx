import { createSlice } from "@reduxjs/toolkit";

const initialState = { userState: false };

const userStateSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    login: (state) => {
      state.userState = true;
    },
    logout: (state) => {
      state.userState = false;
    },
  },
});

export default userStateSlice.reducer;
export const { login, logout } = userStateSlice.actions;
