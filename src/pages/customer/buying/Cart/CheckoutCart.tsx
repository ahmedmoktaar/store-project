import { Form, Formik, FormikValues } from "formik";
import PromoCode from "./PromoCode";
import { useState } from "react";
import { promoCodes } from "../../../../assets/data/GlobalVariables";
import { Typography } from "@mui/material";

// -------------
// Props
// -------------
interface Props {
  subtotal: number;
}

// ------------------
// main component
// ------------------
const CheckoutCart: React.FC<Props> = ({ subtotal }) => {
  const [promoCodeValue, setPromoCodeValue] = useState(0);

  // ------------------
  // Formik Values
  // ------------------
  const handleValidation = (values: FormikValues) => {
    const errors: { code?: string } = {};
    if (!promoCodes.includes(values.code)) {
      errors.code = "Invalid code";
    }
    return errors;
  };

  const handleOnSubmit = () => {
    setPromoCodeValue(10);
  };

  return (
    <>
      <div className="vl-checkout" />

      <div className="order-wrapper">
        <Formik
          initialValues={{ code: "" }}
          validate={handleValidation}
          onSubmit={handleOnSubmit}
          validateOnBlur={false}
          validateOnChange={false}
        >
          <Form>
            <PromoCode promoCodeValue={promoCodeValue} />
          </Form>
        </Formik>

        <div className="summary-wrapper">
          <Typography variant="h5" component={"header"} className="semi-bold summary-header">
            Order Summary
          </Typography>

          <div className="receipt">
            <Typography>Subtotal</Typography>
            <Typography>+ {subtotal} $</Typography>
          </div>

          <div className="receipt">
            <Typography>Promotional Code</Typography>
            <Typography>- {promoCodeValue} $ </Typography>
          </div>
          <div className="receipt">
            <Typography>Shipping</Typography>
            <Typography> FREE</Typography>
          </div>
          <hr />
          <div className="receipt">
            <Typography variant="h6" component={"p"} className="semi-bold">
              ORDER TOTALS
            </Typography>
            <Typography variant="h6" component={"p"} className="semi-bold">
              {subtotal - promoCodeValue} $
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;
