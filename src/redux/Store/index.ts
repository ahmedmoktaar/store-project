import { configureStore } from "@reduxjs/toolkit";
import sellerDetailsReducer from "../features/SignUpSeller/SellerDetailsSlice";

const Store = configureStore({
  reducer: {
    sellerDetails: sellerDetailsReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store