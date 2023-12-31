import styled from "@emotion/styled";
import { Stepper, Step, StepLabel, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import CartPage from "../Cart";
import SignInCustomer from "../../SignInCustomer";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import MuiButton from "../../../../components/shared/MuiButton";
import NotFound from "../../../NotFound";
import { useSelector } from "../../../../redux/Store/hooks";
import Shipping from "./Shipping";

// ---------------------
// steps components
// ---------------------
interface Props {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const steps = ["Bag", "shipping", "Payment", "Confirmation"];
const Components: React.FC<Props> = ({ activeStep, setActiveStep }) => {
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

// ----------------
// main component
// ----------------
const CheckoutPage: React.FC = () => {
  // ----------------
  // redux-store
  // ----------------
  const cartProducts = useSelector((state) => state.cart);
  const customersDetails = useSelector((state) => state.customersDetails);
  // -----------------------------------
  // customer details
  // -----------------------------------
  const isLoggedIn = customersDetails.find((customerDetails) => customerDetails.isActive);
  const activeCustomerIndex = customersDetails.findIndex(
    (customerDetails) => customerDetails.isActive
  );
  const customerCartProducts =
    activeCustomerIndex !== -1
      ? cartProducts[activeCustomerIndex].customerCart
      : cartProducts[0].customerCart;

  // ---------------------
  // handle step change
  // ---------------------
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Holder>
      {isLoggedIn ? (
        <div>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              const stepProps: { completed?: boolean } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <Components activeStep={activeStep} setActiveStep={setActiveStep} />

          {customerCartProducts.length === 1 ? null : (
            <div className="navigation-buttons">
              <MuiButton
                onClick={handleNext}
                disabled={activeStep === steps.length}
                style={activeStep === 1 || activeStep === 2 ? { display: "none" } : {}}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </MuiButton>
            </div>
          )}
        </div>
      ) : (
        <>
          <Typography> You need to be logged in to checkout</Typography>
          <SignInCustomer hidden={true} />
        </>
      )}
    </Holder>
  );
};

export default CheckoutPage;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  margin: 1em 1em;

  .navigation-buttons {
    display: grid;
    justify-content: end;
    margin: 0 5em 2em;
    button {
      width: min-content;
      justify-self: center;
    }
  }
`;
