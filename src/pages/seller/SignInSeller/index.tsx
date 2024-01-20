import { Navigate } from "react-router-dom";
import useReduxSeller from "../../../hooks/useReduxSeller";
import SignInComponent from "./SignInComponent";

// ------------------
// main component
// ------------------
const SignInSeller: React.FC = () => {
  const { activeSellersDetails } = useReduxSeller();
  
  return <>{activeSellersDetails ? <Navigate to="/" replace={true} /> : <SignInComponent />}</>;
};

export default SignInSeller;
