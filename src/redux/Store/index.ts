import { configureStore } from "@reduxjs/toolkit";
import sellersDetailsReducer from "../features/sellers/SellerDetailsSlice";
import customersDetailsReducer from "../features/customers/CustomerDetailsSlice";
import CartReducer from "../features/Cart/CartSlice";
import storeProductsReducer from "../features/Products/ProductsSlice";

const Store = configureStore({
  reducer: {
    customersDetails: customersDetailsReducer,
    sellersDetails: sellersDetailsReducer,
    storeProducts: storeProductsReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
