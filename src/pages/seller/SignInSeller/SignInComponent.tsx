import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as yup from "yup";
import { Form, Formik } from "formik";
import styles from "../../../styles";
import MuiButton from "../../../components/shared/MuiButton";
import Logo from "../../../components/shared/Logo";
import Link from "../../../components/shared/Link/Link";
import { useDispatch, useSelector } from "../../../redux/Store/hooks";
import FormTextField from "../../../components/formik/FormTextField";
import FormPassword from "../../../components/formik/FormPassword";
import { login } from "../../../redux/features/sellers/SellerDetailsSlice";

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
const SignInComponent: React.FC = () => {
  // --------------------
  // hooks
  // --------------------
  const sellersDetails = useSelector((state) => state.sellersDetails);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

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
      .required("Required")
      .test("email-check", "Incorrect email", (value) => {
        return sellersDetails.some((sellerdetail) => value === sellerdetail.email);
      }),
    password: yup.string().when("email", {
      is: (email: string) =>
        email &&
        sellersDetails.some((sellerDetail) => email.toLowerCase() === sellerDetail.email),
      then: (schema) =>
        schema
          .required("Incorrect password")
          .test("password-check", "Incorrect password", (value) => {
            return sellersDetails.some((sellerDetail) => value === sellerDetail.password);
          }),
    }),
  });

  const onSubmit = (value: loginValues) => {
    dispatch(login(value.email)), navigateTo("/addproduct");
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

            <Link to="/signupseller" className="signup-link">
              Don't have an account? Sign Up
            </Link>

            <div className="copyright">Copyright © 2023. All Rights Reserved.</div>
          </>
        </Holder>
  );
};

export default SignInComponent;

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
    font-size: 0.6em;
    margin-top: 3em;
    align-self: center;
  }
`;
