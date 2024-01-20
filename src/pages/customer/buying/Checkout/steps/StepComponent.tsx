import { Alert } from "@mui/material";
import { Outlet } from "react-router-dom";
import NotFound from "../../../../NotFound";
import CartPage from "../../Cart";
import Confirmation from "./Confirmation";
import Shipping from "./Shipping";
import Payment from "./Payment";

// ------------------
// props type
// ------------------
interface Props {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

// ------------------
// main component
// ------------------
const StepComponent: React.FC<Props> = ({ activeStep, setActiveStep }) => {
  switch (activeStep) {
    case 0:
      return <CartPage />;
    case 1:
      return <Shipping setActiveStep={setActiveStep} />;

    case 2:
      return <Payment setActiveStep={setActiveStep} />;

    case 3:
      return <Confirmation />;

    case 4:
      return (
        <>
          <Alert severity="success" variant="filled">
            Your order is confirmed
          </Alert>
          <Outlet />
        </>
      );

    default:
      <NotFound />;
      break;
  }
};
export default StepComponent;
