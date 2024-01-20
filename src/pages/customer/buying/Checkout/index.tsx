import styled from "@emotion/styled";
import { useState } from "react";
import MuiButton from "../../../../components/shared/MuiButton";
import useReduxCustomer from "../../../../hooks/useReduxCustomer";
import StepComponent from "./steps/StepComponent";
import NotLoggedin from "./NotLoggedin";
import Stepper from "./Stepper";

const steps = ["Bag", "shipping", "Payment", "Confirmation"];

// ----------------
// main component 
// ----------------
const CheckoutPage: React.FC = () => {
  // ----------------
  // hooks
  // ----------------
  const { activeCustomerDetails, activeCustomerCart } = useReduxCustomer(null);

  // ---------------------
  // handle step change
  // ---------------------
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Holder>
      {activeCustomerDetails ? (
        <div>
          <Stepper steps={steps} activeStep={activeStep} />

          <StepComponent activeStep={activeStep} setActiveStep={setActiveStep} />

          {activeCustomerCart.length === 0 ? null : (
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
        <NotLoggedin />
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
  .alert-massage {
    text-align: center;
  }
`;
