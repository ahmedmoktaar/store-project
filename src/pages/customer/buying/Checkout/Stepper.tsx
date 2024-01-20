import { Stepper as MUIStepper, Step, StepLabel } from "@mui/material";

// ------------------
// props type
// ------------------
interface Props {
  activeStep: number;
  steps: string[];
}

const Stepper: React.FC<Props> = ({ steps, activeStep }) => {
  return (
    <MUIStepper activeStep={activeStep}>
      {steps.map((label) => {
        const stepProps: { completed?: boolean } = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </MUIStepper>
  );
};

export default Stepper;
