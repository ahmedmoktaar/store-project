import { configureStore } from "@reduxjs/toolkit";
import sellerDetailsReducer from "../features/sellers/SellerDetails/SellerDetailsSlice";
import customerDetailsReducer from "../features/customers/CustomerDetails/CustomerDetailsSlice";
import customerStateReducer from "../features/customers/CustomerState/CustomerStateSlice";
import sellerStateReducer from "../features/sellers/SellerState/SellerStateSlice";
import BabyReducer from "../features/items/ItemDetails/BabySlice";
import MenReducer from "../features/items/ItemDetails/MenSlice";
import WomenReducer from "../features/items/ItemDetails/WomenSlice";
import CartReducer from "../features/Cart/CartSlice";

const Store = configureStore({
  reducer: {
    customerLoggedIn: customerStateReducer,
    sellerLoggedIn: sellerStateReducer,
    customerDetails: customerDetailsReducer,
    sellerDetails: sellerDetailsReducer,
    baby: BabyReducer,
    men: MenReducer,
    women: WomenReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
