import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import AddProduct from "../pages/seller/AddItem";
import TrackProducts from "../pages/seller/TrackItems";
import SignInSeller from "../pages/seller/SignInSeller";
import SignUpSeller from "../pages/seller/SignUpSeller";
import RootLayout from "../layout/RootLayout/RootLayout";
import SellerLayout from "../layout/SellerLayout";
import SignInCustomer from "../pages/customer/SignInCustomer";
import SignUpCustomer from "../pages/customer/SignUpCustomer";
import MenCategoriesPage from "../pages/customer/categories/Men";
import WomenCategoriesPage from "../pages/customer/categories/Women";
import BabyCategoriesPage from "../pages/customer/categories/Baby";
import Category from "../components/Category";
import CartPage from "../pages/customer/buying/Cart";
import CheckoutPage from "../pages/customer/buying/Checkout";

// ----------------------
// routes construction
// ----------------------
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/men" element={<MenCategoriesPage />}>
          <Route
            path=":category"
            element={<Category storeCategory="men" />}
          />
        </Route>
        <Route path="/women" element={<WomenCategoriesPage />}>
          <Route
            path=":category"
            element={<Category storeCategory="women" />}
          />
        </Route>
        <Route path="/baby" element={<BabyCategoriesPage />}>
          <Route
            path=":category"
            element={<Category storeCategory="baby" />}
          />
        </Route>
      </Route>

      <Route element={<SellerLayout />}>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/trackproducts" element={<TrackProducts />} />
      </Route>

      <Route>
        <Route path="/signinseller" element={<SignInSeller />} />
        <Route path="/signupseller" element={<SignUpSeller />} />
        <Route path="/signinuser" element={<SignInCustomer />} />
        <Route path="/signupuser" element={<SignUpCustomer />} />
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
