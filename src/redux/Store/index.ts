import { configureStore } from "@reduxjs/toolkit";
import sellerDetailsReducer from "../features/SellerDetails/SellerDetailsSlice";
import userStateReducer from "../features/UserState/UserStateSlice";
import BabyBoyReducer from "../features/ItemDetails/BabyBoySlice";
import BabyGirlReducer from "../features/ItemDetails/BabyGirlSlice";
import GirlReducer from "../features/ItemDetails/GirlSlice";
import BoyReducer from "../features/ItemDetails/BoySlice";
import ManReducer from "../features/ItemDetails/ManSlice";
import WomanReducer from "../features/ItemDetails/WomanSlice";

const Store = configureStore({
  reducer: {
    sellerDetails: sellerDetailsReducer,
    isloggedin: userStateReducer,
    babyboy: BabyBoyReducer,
    babygirl: BabyGirlReducer,
    boy: BoyReducer,
    girl: GirlReducer,
    man: ManReducer,
    woman: WomanReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
