import { Typography } from "@mui/material";
import SignInCustomer from "../../SignInCustomer";
import { SignInProvider } from "../../../../hooks/context";

const NotLoggedin = () => {
  return (
    <div className="alert-massage">
      <Typography variant="h5"> You need to be logged in to checkout</Typography>
      <SignInProvider value={true}>
        <SignInCustomer />
      </SignInProvider>
    </div>
  );
};

export default NotLoggedin;
