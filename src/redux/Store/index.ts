import { configureStore } from "@reduxjs/toolkit";
import sellerDetailsReducer from "../features/sellers/SellerDetails/SellerDetailsSlice";
import customerDetailsReducer from "../features/customers/CustomerDetails/CustomerDetailsSlice";
import customerStateReducer from "../features/customers/CustomerState/CustomerStateSlice";
import sellerStateReducer from "../features/sellers/SellerState/SellerStateSlice";
import BabyReducer from "../features/items/ItemDetails/BabySlice";
import ManReducer from "../features/items/ItemDetails/ManSlice";
import WomanReducer from "../features/items/ItemDetails/WomanSlice";
import availableCategoriesReducer from "../features/items/AvailableCategories/AvailableCategoriesSlice";
import CartReducer from "../features/Cart/CartSlice";

const Store = configureStore({
  reducer: {
    customerLoggedIn: customerStateReducer,
    sellerLoggedIn: sellerStateReducer,
    customerDetails: customerDetailsReducer,
    sellerDetails: sellerDetailsReducer,
    baby: BabyReducer,
    men: ManReducer,
    women: WomanReducer,
    availableCategories: availableCategoriesReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
