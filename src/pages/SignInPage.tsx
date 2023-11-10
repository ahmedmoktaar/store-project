import styled from "@emotion/styled";
import * as yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styles from "../styles";
import { Typography } from "@mui/material";
import MuiButton from "../components/shared/MuiButton";
import Logo from "../components/shared/Logo";
import Link from "../components/shared/Link/Link";
import { useSelector } from "../redux/Store/hooks";
import FormTextField from "../components/formik/FormTextField";
import FormPassword from "../components/formik/FormPassword";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

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
const LoginPage: React.FC = () => {
  // --------------------
  // reduex seller data
  // --------------------
  const sellerDetails = useSelector((state) => state.sellerDetails);

  // --------------------
  // useNavigate Hook
  // --------------------
  const navigateTo = useNavigate();

  // --------------------
  // formik variables
  // --------------------
  const initalValues: loginValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Required")
      .test(
        "email-check",
        "Incorrect email",
        (value) => value === sellerDetails.email
      ),
    password: yup
      .string()
      .required("Required")
      .test(
        "password-check",
        "Incorrect password",
        (value) => value === sellerDetails.password
      ),
  });

  const onSubmit = (values: loginValues) => {
    values.email === sellerDetails.email &&
    values.password === sellerDetails.password
      ? navigateTo("/additem")
      : null;
  };

  return (
    <Holder>
      <Logo />

      <div className="lock-icon">
        <LockOutlinedIcon fontSize="large" />
      </div>
      <Typography className="signin-label" variant="h5" component="h1">
        Sign in
      </Typography>

      <Formik
        initialValues={initalValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <FormTextField label="Email" name="email" />
          <FormPassword name="password" />
          <MuiButton type="submit" className="signin-button">
            SIGN IN
          </MuiButton>
        </Form>
      </Formik>

      <Link to="/signup" className="signup-link">
        Don't have an account? Sign Up
      </Link>
      <div className="Copyright">Copyright © 2023. All Rights Reserved.</div>
    </Holder>
  );
};

export default LoginPage;

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
  .Copyright {
    font-size: 0.6em;
    position: absolute;
    bottom: 5em;
    align-self: center;
  }
`;
