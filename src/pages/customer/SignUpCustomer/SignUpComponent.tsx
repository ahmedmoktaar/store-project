import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import * as yup from "yup";
import { Form, Formik } from "formik";
import FormTextField from "../../../components/formik/FormTextField";
import FormPassword from "../../../components/formik/FormPassword";
import { SignUpInitialValues, SignUpValues } from "../../../assets/data/GlobalVariables";
import { useDispatch, useSelector } from "../../../redux/Store/hooks";
import { addCustomerDetails } from "../../../redux/features/customers/CustomerDetailsSlice";
import MuiButton from "../../../components/shared/MuiButton";
import Logo from "../../../components/shared/Logo";
import Link from "../../../components/shared/Link/Link";
import styles from "../../../styles";
import { addProductToCart } from "../../../redux/features/Cart/CartSlice";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ------------------
// main component
// ------------------
const SignUpComponent: React.FC = () => {
  // ------------------
  // hooks
  // ------------------
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const cartProducts = useSelector((state) => state.cart);

  // -----------------------------------
  // check if Email is Registered
  // -----------------------------------
  const customersDetails = useSelector((state) => state.customersDetails);
  const isEmailRegistered = (newEmail: string) =>
    customersDetails.find((customerDetails) => customerDetails.email === newEmail);

  // --------------------
  // formik variables
  // --------------------
  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string(),
    email: yup
      .string()
      .email()
      .required("Please Enter your email")
      .test("email-exists", "Email already exists", function (newEmail) {
        return !isEmailRegistered(newEmail);
      }),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: yup
      .string()
      .required("Please Enter your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
    paypal: yup.string(),
    socialMedia: yup.string(),
  });

  const onSubmit = (values: SignUpValues) => {
    dispatch(addCustomerDetails(values));

    dispatch(
      addProductToCart({
        customerID: values.id,
        products: cartProducts[0].customerCart,
      })
    );

    navigateTo(-1);
  };

  return (
    <Holder>
      <Logo />
      <Typography className="signup-label" variant="h4" component="h1">
        Create account
      </Typography>

      <Formik
        initialValues={SignUpInitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-wrapper">
          <div className="fullName-wrapper">
            <FormTextField name="firstName" label="First Name *" />
            <FormTextField name="lastName" label="Last Name" />
          </div>
          <FormTextField name="email" label="Email *" />
          <FormPassword name="password" label="Password *" />
          <FormPassword name="confirmPassword" label="Password *" />
          <FormTextField name="paypal" label="PayPal Details (Optional)" />
          <FormTextField name="socialMedia" label="Social Media Links (Optional)" />
          <MuiButton type="submit" className="submit-button">
            submit
          </MuiButton>
        </Form>
      </Formik>

      <div className="additional-info">
        <p>
          Already have an account? <Link to="/signinuser">Sign in</Link>
        </p>
        <p>
          For further support, you may visit the Help Center or contact our customer service team.
        </p>
      </div>
    </Holder>
  );
};

export default SignUpComponent;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  margin: 1.5em auto;
  width: 20em;
  text-align: center;
  font-size: 1.1em;

  .form-wrapper {
    margin-top: 1.5em;
    display: grid;
    gap: 1.2em;
    .fullName-wrapper {
      display: flex;
      gap: 0.8em;
    }
  }

  .submit-button {
    background-color: ${colors.orange};
    color: ${colors.Blue};
    ${fonts.medium}
    :hover {
      background-color: ${colors.darkOrange};
    }
  }

  .additional-info {
    p:first-of-type {
      font-size: 0.9em;
      margin-bottom: 1.5em;
    }
    p:last-of-type {
      font-size: 0.7em;
    }
  }
`;
