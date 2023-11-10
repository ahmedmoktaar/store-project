import { Form, Formik } from "formik";
import * as yup from "yup";
import FormTextField from "../../../components/formik/FormTextField";
import FormPassword from "../../../components/formik/FormPassword";
import {
  SignUpInitialValues,
  SignUpValues,
} from "../../../components/GlobalVariables";
import { useDispatch, useSelector } from "../../../redux/Store/hooks";
import { addSellerDetails } from "../../../redux/features/SignUpSeller/SellerDetailsSlice";
import MuiButton from "../../../components/shared/MuiButton";
import styled from "@emotion/styled";
import Logo from "../../../components/shared/Logo";
import { Typography } from "@mui/material";
import Link from "../../../components/shared/Link/Link";
import styles from "../../../styles";
import { useNavigate } from "react-router-dom";
import NotFound from "../../NotFound";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ------------------
// main component
// ------------------
const SignUp: React.FC = () => {
  // ------------------
  // hooks
  // ------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isloggedin.userState);

  // --------------------
  // formik variables
  // --------------------
  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string(),
    email: yup.string().email().required("Please Enter your email"),
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
    paypal: yup.string().required("Please enter your PayPal email or username"),
    website: yup.string().url(),
  });

  const onSubmit = (values: SignUpValues) => {
    dispatch(addSellerDetails(values));
    navigate("/signin");
  };

  return (
    <Holder>
      <Logo />
      {isLoggedIn ? (
        <div className="not-found">
          <NotFound />
        </div>
      ) : (
        <>
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
                <FormTextField name="firstName" label="First Name" />
                <FormTextField name="lastName" label="Last Name" />
              </div>
              <FormTextField name="email" label="Email" />
              <FormPassword name="password" />
              <FormPassword name="confirmPassword" />
              <FormTextField name="paypal" label="PayPal Details" />
              <FormTextField name="website" label="Your Website" />
              <MuiButton type="submit" className="submit-button">
                submit
              </MuiButton>
            </Form>
          </Formik>
          <div className="additional-info">
            <p>
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
            <p>
              For further support, you may visit the Help Center or contact our
              customer service team.
            </p>
          </div>
        </>
      )}
    </Holder>
  );
};

export default SignUp;

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
  .not-found {
    position: absolute;
    top: 35%;
    left: 35%;
    font-size: 1.4em;
  }
`;
