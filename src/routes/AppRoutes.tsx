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
import SignIn from "../pages/SignIn";
import SignUp from "../pages/seller/SignUp";
import RootLayout from "../layout/RootLayout";
import SellerLayout from "../layout/SellerLayout";

// ----------------------
// routes construction
// ----------------------
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<SellerLayout />}>
        <Route path="/additem" element={<AddItem />} />
        <Route path="/trackitems" element={<TrackItems />} />
      </Route>
      <Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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
