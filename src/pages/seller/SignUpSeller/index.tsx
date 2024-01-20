import { Navigate } from "react-router-dom";
import useReduxSeller from "../../../hooks/useReduxSeller";
import SignUpComponent from "./SignUpComponent";

// ------------------
// main component
// ------------------
const SignUpSeller: React.FC = () => {
  const { activeSellersDetails } = useReduxSeller();

  return <>{activeSellersDetails ? <Navigate to="/" replace={true} /> : <SignUpComponent />}</>;
};

export default SignUpSeller;
