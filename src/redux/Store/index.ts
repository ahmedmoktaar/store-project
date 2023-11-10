import { configureStore } from "@reduxjs/toolkit";
import sellerDetailsReducer from "../features/SignUpSeller/SellerDetailsSlice";
import userStateReducer from "../features/UserState/UserStateSlice";

const Store = configureStore({
  reducer: {
    sellerDetails: sellerDetailsReducer,
    isloggedin: userStateReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
