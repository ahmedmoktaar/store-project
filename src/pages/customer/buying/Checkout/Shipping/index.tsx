import styled from "@emotion/styled";
import { Form, Formik } from "formik";
import * as yup from "yup";
import TextFormLabeled from "../../../../../components/formik/FormTextFieldLabeled";
import MuiButton from "../../../../../components/shared/MuiButton";
import { useState } from "react";
import {
  ShippingInfo,
  ShippingInfoInitial,
} from "../../../../../assets/data/GlobalVariables";
import styles from "../../../../../styles";
import { useDispatch, useSelector } from "../../../../../redux/Store/hooks";
import { saveShippingInfo } from "../../../../../redux/features/Cart/CartSlice";

// -------------------
// style variables
// -------------------
const { fonts } = styles;

// ---------------------
// Props
// ---------------------
interface Props {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

// ------------------
// main component
// ------------------
const Shipping: React.FC<Props> = ({ setActiveStep }) => {
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
  // formik variables
  // --------------------
  const initialValues: ShippingInfo = ShippingInfoInitial;
  const phoneRegExp =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    address1: yup.string().required("Required"),
    aptNum: yup.string().required("Required"),
    city: yup.string().required("Required"),
    zipCode: yup.string().min(5, "invalid Zip Code").required("Required"),
    phone: yup.string().matches(phoneRegExp, "Invalid phone number").required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
  });

  const onSubmit = (values: ShippingInfo) => {
    dispatch(
      saveShippingInfo({
        ShippingInfo: values,
        customerID: activeCustomerDetails?.id || "",
      })
    );
    setSubmitted(true);
    setActiveStep(2);
  };

  return (
    <Holder>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-wrapper">
          <TextFormLabeled size="small" name="firstName" label="First Name" />
          <TextFormLabeled size="small" name="lastName" label="Last Name" />
          <TextFormLabeled size="small" name="address1" label="Address" />
          <TextFormLabeled size="small" name="aptNum" label="Apt. No." />
          <TextFormLabeled size="small" name="city" label="City" />
          <TextFormLabeled size="small" name="zipCode" label="Zip Code" />
          <TextFormLabeled size="small" name="phone" label="Phone" />
          <TextFormLabeled size="small" name="email" label="Email" />

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

export default Shipping;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  margin: 2em 2em 0;
  .form-wrapper {
    display: grid;
    gap: 1em;
    grid-template-columns: auto auto;
    justify-content: center;
    div {
      grid-template-columns: 9em max-content max-content;
      label {
        ${fonts.medium}
        font-size: 1em;
        margin-right: 1em;
        justify-self: flex-end;
      }
    }
    .confirming {
      grid-column: 1/4;
      display: grid;
      grid-template-columns: max-content max-content;
      justify-content: end;
      gap: 1em;
    }
  }
`;
