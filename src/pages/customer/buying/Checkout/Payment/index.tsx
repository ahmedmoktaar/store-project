import { useState } from "react";
import { Typography, Tabs, Tab } from "@mui/material";
import { Form, Formik } from "formik";
import styled from "@emotion/styled";
import * as yup from "yup";
import FormTextField from "../../../../../components/formik/FormTextField";
import MuiButton from "../../../../../components/shared/MuiButton";
import {
  PaymentInfo,
  PaymentInfoInitial,
} from "../../../../../assets/data/GlobalVariables";
import { useDispatch, useSelector } from "../../../../../redux/Store/hooks";
import { savePaymentInfo } from "../../../../../redux/features/Cart/CartSlice";

// ---------------------
// TabPanel component
// ---------------------
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
};

// ---------------------
// Props
// ---------------------
interface Props {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

// ------------------
// main component
// ------------------
const Payment: React.FC<Props> = ({ setActiveStep }) => {
  // ------------------
  // hooks
  // ------------------
  const dispatch = useDispatch();
  const [isSubmitted, setSubmitted] = useState(false);

  // --------------------
  // customer details
  // --------------------
  const customersDetails = useSelector((state) => state.customersDetails);
  const activeCustomerDetails = customersDetails.find(
    (customerDetails) => customerDetails.isActive
  );

  // --------------------
  // handle tab change
  // --------------------
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // --------------------
  // formik variables
  // --------------------
  const initialValues = PaymentInfoInitial;
  const validationSchema = yup.object({
    cardNumber: yup
      .string()
      .required("Required")
      .min(13, "Invalid Card Number")
      .max(16, "Invalid Card Number"),
    securityCode: yup
      .string()
      .required("Required")
      .min(3, "Invalid Card Number")
      .max(3, "Invalid Card Number"),
    expirationDate: yup
      .date()
      .typeError("Format: 14/1/2026")
      .required("Required")
      .min(new Date("2024-1-1"), "Incorrect date")
      .max(new Date("2032-1-14"), "Incorrect date"),
  });

  const onSubmit = (values: PaymentInfo) => {
    dispatch(
      savePaymentInfo({
        PaymentInfo: values,
        customerEmail: activeCustomerDetails?.email || "",
      })
    );
    setSubmitted(true);
    setActiveStep(3);
  };

  return (
    <Holder>
      <Typography variant="h5" component={"h1"}>
        Choose Payment Method
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="tabs">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Debit or Credit" />
              <Tab label="PayPal" />
              <Tab label="MasterCard" />
            </Tabs>
          </div>
          <TabPanel value={value} index={0}>
            <div className="form-wrapper">
              <FormTextField name="cardNumber" type="number" label={"Card Number"} />
              <FormTextField
                name="securityCode"
                type="number"
                label={"Security Code"}
                helperText={"Must be 3 Digit"}
              />
              <FormTextField name="expirationDate" label={"Expiration Date"} />
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            PayPal
          </TabPanel>
          <TabPanel value={value} index={2}>
            Master Card
          </TabPanel>

          <div className="confirming">
            <MuiButton
              type="submit"
              variant="contained"
              size="medium"
              disabled={isSubmitted}
            >
              Next
            </MuiButton>
          </div>
        </Form>
      </Formik>
    </Holder>
  );
};
export default Payment;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  margin-top: 2em;
  display: grid;
  justify-content: center;
  text-align: center;
  .tabs{
  margin-top: 1em;
  }
  .form-wrapper {
    margin: 1em 1em 1em 0;
    display: grid;
    gap: 1em;
    width: 25em;
  }
  .confirming {
    grid-column: 1/4;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: end;
    gap: 1em;
  }
`;
