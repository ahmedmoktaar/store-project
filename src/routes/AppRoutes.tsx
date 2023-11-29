import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import AddItem from "../pages/seller/AddItem";
import TrackItems from "../pages/seller/TrackItems";
import SignInSeller from "../pages/seller/SignInSeller";
import SignUpSeller from "../pages/seller/SignUpSeller";
import RootLayout from "../layout/RootLayout";
import SellerLayout from "../layout/SellerLayout";
import SignInCustomer from "../pages/customer/SignInCustomer";
import SignUpCustomer from "../pages/customer/SignUpCustomer";
import MenCategoriesPage from "../pages/customer/categories/Men";
import WomenCategoriesPage from "../pages/customer/categories/Women";
import BabyCategoriesPage from "../pages/customer/categories/Baby";
import Category from "../components/Category";
import ItemModal from "../components/ItemModal";

// ----------------------
// routes construction
// ----------------------
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenCategoriesPage />}>
          <Route
            path=":category"
            element={<Category gender="Male" store="men" />}
          >
            <Route path=":product" element={<ItemModal />} />
          </Route>
        </Route>
        <Route path="/women" element={<WomenCategoriesPage />} />
        <Route path="/baby" element={<BabyCategoriesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<SellerLayout />}>
        <Route path="/additem" element={<AddItem />} />
        <Route path="/trackitems" element={<TrackItems />} />
      </Route>
      <Route>
        <Route path="/signinseller" element={<SignInSeller />} />
        <Route path="/signupseller" element={<SignUpSeller />} />
        <Route path="/signincustomer" element={<SignInCustomer />} />
        <Route path="/signupcustomer" element={<SignUpCustomer />} />
      </Route>
    </>
  )
);

// ------------------
// main component
// ------------------
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
