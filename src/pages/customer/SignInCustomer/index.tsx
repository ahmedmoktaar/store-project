import { Navigate, useLocation } from "react-router-dom";
import useReduxCustomer from "../../../hooks/useReduxCustomer";
import SignInComponent from "./SignInComponent";

// ------------------
// main component
// ------------------
const SignInCustomer: React.FC = () => {
  // --------------------
  // Hooks
  // --------------------
  const location = useLocation();
  const { activeCustomerDetails } = useReduxCustomer(null);

  return (
    <>
      {location.pathname === "/checkout" && activeCustomerDetails ? (
        <Navigate to="/checkout" />
      ) : activeCustomerDetails ? (
        <Navigate to="/profile" replace={true} />
      ) : (
        <SignInComponent />
      )}
    </>
  );
};

export default SignInCustomer;
