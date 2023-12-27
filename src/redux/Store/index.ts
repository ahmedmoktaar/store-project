import { configureStore } from "@reduxjs/toolkit";
import sellersDetailsReducer from "../features/sellers/SellerDetails/SellerDetailsSlice";
import customersDetailsReducer from "../features/customers/CustomerDetails/CustomerDetailsSlice";
import customersStateReducer from "../features/customers/CustomerState/CustomerStateSlice";
import CartReducer from "../features/Cart/CartSlice";
import storeProductsReducer from "../features/items/ProductsSlice";

const Store = configureStore({
  reducer: {
    customersLoggedIn: customersStateReducer,
    customersDetails: customersDetailsReducer,
    sellersDetails: sellersDetailsReducer,
    storeProducts: storeProductsReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
