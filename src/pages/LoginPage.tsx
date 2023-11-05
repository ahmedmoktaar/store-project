import styled from "@emotion/styled";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styles from "../styles";
import { Button, TextField, Typography } from "@mui/material";
import Password from "../components/shared/Password";
import { Link } from "react-router-dom";
import CheckBox from "../components/shared/CheckBox";

// ----------------
// style variables
// ----------------
const { colors } = styles;

// ---------------
// main component
// ---------------
const LoginPage: React.FC = () => {
  return (
    <Holder>
      <div className="lock-icon">
        <LockOutlinedIcon fontSize="large" />
      </div>
      <Typography className="signin-label" variant="h5" component="h1">
        Sign in
      </Typography>

      <TextField id="outlined-required" label="Email" fullWidth />
      <Password />
      <CheckBox label="Remember me" />
      <Button variant="contained" fullWidth>
        SIGN IN
      </Button>

      <Link to="/signup" className="signup-link">
        Don't have an account? Sign Up
      </Link>
    </Holder>
  );
};

export default LoginPage;

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  font-size: 1.3em;
  margin: 3em auto;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  width: 16em;

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
  .signup-link {
    font-size: 0.75em;
  }
`;
