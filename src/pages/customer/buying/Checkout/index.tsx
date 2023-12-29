import styled from "@emotion/styled";
import { Stepper, Step, StepLabel, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import CartPage from "../Cart";
import SignInCustomer from "../../SignInCustomer";
import Payment from "./Payment";
import Confirmation from "./Confirmtion";
import MuiButton from "../../../../components/shared/MuiButton";
import NotFound from "../../../NotFound";
import { useSelector } from "../../../../redux/Store/hooks";

const steps = ["Bag", "shipping", "Payment", "Confirmation"];

const CheckoutPage: React.FC = () => {
  const cartProducts = useSelector((state) => state.cart);
  const customersDetails = useSelector((state) => state.customersDetails);

  // -----------------------------------
  // check if any customer is logged in
  // -----------------------------------
  const isLoggedIn = customersDetails.find((customerDetails) => customerDetails.isActive);
  const activeCustomerIndex = customersDetails.findIndex(
    (customerDetails) => customerDetails.isActive
  );

  const customerCartProducts =
    activeCustomerIndex !== -1
      ? cartProducts[activeCustomerIndex].customerCart
      : cartProducts[0].customerCart;

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const Components: React.FC<{ index: number }> = ({ index }) => {
    switch (index) {
      case 0:
        return <CartPage />;
      case 1:
        return "";

      case 2:
        return <Payment />;

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

  return (
    <Holder>
      {isLoggedIn ? (
        <>
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
          <Components index={activeStep} />
          {customerCartProducts.length === 1 ? null : (
            <>
              <Typography>Step {activeStep + 1}</Typography>
              <Outlet />

              <MuiButton
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </MuiButton>
              <MuiButton onClick={handleNext} disabled={activeStep === steps.length}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </MuiButton>
            </>
          )}
        </>
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

const Holder = styled.div``;
