import { configureStore } from "@reduxjs/toolkit";
import sellerDetailsReducer from "../features/SellerDetails/SellerDetailsSlice";
import customerDetailsReducer from "../features/CustomerDetails/CustomerDetailsSlice";
import customerStateReducer from "../features/CustomerState/CustomerStateSlice";
import sellerStateReducer from "../features/SellerState/SellerStateSlice";
import BabyReducer from "../features/ItemDetails/BabySlice";
import GirlReducer from "../features/ItemDetails/GirlSlice";
import BoyReducer from "../features/ItemDetails/BoySlice";
import ManReducer from "../features/ItemDetails/ManSlice";
import WomanReducer from "../features/ItemDetails/WomanSlice";

const Store = configureStore({
  reducer: {
    customerLoggedIn: customerStateReducer,
    sellerLoggedIn: sellerStateReducer,
    customerDetails: customerDetailsReducer,
    sellerDetails: sellerDetailsReducer,
    baby: BabyReducer,
    boys: BoyReducer,
    girls: GirlReducer,
    men: ManReducer,
    women: WomanReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
