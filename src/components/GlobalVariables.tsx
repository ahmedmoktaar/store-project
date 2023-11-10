//-------------------------------------------------
// (Sign up and seller details) values type
//-------------------------------------------------
export interface SignUpValues {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword: string;
  paypal: string;
  website?: string;
}

//-------------------------------------------------
// (Sign up and seller details) initial values
//-------------------------------------------------
export const SignUpInitialValues: SignUpValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  paypal: "",
  website: "",
};
