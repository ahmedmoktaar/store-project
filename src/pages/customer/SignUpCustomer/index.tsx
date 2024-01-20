import { Navigate } from "react-router-dom";
import useReduxCustomer from "../../../hooks/useReduxCustomer";
import SignUpComponent from "./SignUpComponent";

// ------------------
// main component
// ------------------
const SignUpCustomer: React.FC = () => {
  const { activeCustomerDetails } = useReduxCustomer(null);

  return (
    <>{activeCustomerDetails ? <Navigate to="/profile" replace={true} /> : <SignUpComponent />}</>
  );
};

export default SignUpCustomer;
