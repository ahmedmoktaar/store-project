import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as yup from "yup";
import { Form, Formik } from "formik";
import MuiButton from "../../../components/shared/MuiButton";
import Logo from "../../../components/shared/Logo";
import Link from "../../../components/shared/Link/Link";
import FormTextField from "../../../components/formik/FormTextField";
import FormPassword from "../../../components/formik/FormPassword";
import styles from "../../../styles";
import { useDispatch, useSelector } from "../../../redux/Store/hooks";
import { login } from "../../../redux/features/customers/CustomerDetailsSlice";

// -------------------
// style variables
// -------------------
const { colors } = styles;

// -------------------
// login values type
// -------------------
interface loginValues {
  email: string;
  password: string;
}

// ------------------
// main component
// ------------------
const SignIn: React.FC = () => {
  // --------------------
  // Hooks
  // --------------------
  const dispatch = useDispatch();
  const location = useLocation();
  const navigateTo = useNavigate();
  const customersDetails = useSelector((state) => state.customersDetails);

  // --------------------
  // formik variables
  // --------------------
  const initialValues: loginValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Invalid email")
      .test("email-check", "Incorrect email", (value) => {
        return customersDetails.some(
          (customerDetail) => value.toLowerCase() === customerDetail.email
        );
      }),
    password: yup.string().when("email", {
      is: (email: string) =>
        email &&
        customersDetails.some((customerDetail) => email.toLowerCase() === customerDetail.email),
      then: (schema) =>
        schema
          .required("Incorrect password")
          .test("password-check", "Incorrect password", (value) => {
            return customersDetails.some((customerDetail) => value === customerDetail.password);
          }),
    }),
  });

  const onSubmit = (value: loginValues) => {
    {
      location.pathname === "/checkout"
        ? dispatch(login(value.email))
        : (dispatch(login(value.email)), navigateTo("/"));
    }
  };

  return (
    <Holder>
      <Logo />
      <>
        <div className="lock-icon">
          <LockOutlinedIcon fontSize="large" />
        </div>

        <Typography className="signin-label" variant="h5" component="h1">
          Sign in
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <Form>
            <FormTextField label="Email" name="email" />
            <FormPassword name="password" label="Password" />
            <MuiButton type="submit" className="signin-button">
              SIGN IN
            </MuiButton>
          </Form>
        </Formik>

        <Link to="/signupuser" className="signup-link">
          Don't have an account? Sign Up
        </Link>

        <div className="copyright">Copyright © 2023. All Rights Reserved.</div>
      </>
    </Holder>
  );
};

export default SignIn;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  font-size: 1.4em;
  margin: 3em auto;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  width: 16em;

  form {
    div:first-of-type {
      margin-bottom: 0.6em;
    }
  }

  .lock-icon {
    background-color: ${colors.orange};
    width: 2.5em;
    height: 2.5em;
    border-radius: 2em;
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
  }

  .signin-label {
    margin-bottom: 1em;
    align-self: center;
  }

  .signin-button {
    margin-top: 2em;
  }

  .signup-link {
    font-size: 0.75em;
  }

  .copyright {
    margin-top: 3em;
    font-size: 0.6em;
    align-self: center;
  }
`;
