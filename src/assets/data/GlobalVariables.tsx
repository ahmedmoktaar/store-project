//-------------------------------------------------
// Sellers values type
//-------------------------------------------------
export interface SignUpValues {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword: string;
  paypal?: string;
  socialMedia?: string;
}

//-------------------------------------------------
// Sign up initial values
//-------------------------------------------------
export const SignUpInitialValues: SignUpValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  paypal: "",
  socialMedia: "",
};

//-------------------------------------------------
// Admin details as a seller + initial value for seller
//-------------------------------------------------
export const AdminDetails: SignUpValues[] = [
  {
    firstName: "admin",
    lastName: "",
    email: "admin@example.com",
    password: "123456zZ#",
    confirmPassword: "123456zZ#",
    paypal: "",
    socialMedia: "",
  },
];

//-------------------------------------------------
// Item details type
//-------------------------------------------------
export interface ItemValues {
  name: string;
  brand: string;
  price: string;
  colors: string;
  sizes: string;
  features: string;
  description: string;
  gender: string;
  mainPic: FileList[]| null;
  media: FileList[]| null;
  amountInStock: string;
  deliveryTime: string;
}

//-------------------------------------------------
// Item details initial values
//-------------------------------------------------
export const itemInitialValues: ItemValues = {
  name: "",
  brand: "",
  price: "",
  colors: "",
  sizes: "",
  features: "",
  description: "",
  gender: "",
  mainPic: null,
  media: null,
  amountInStock: "",
  deliveryTime: "",
};

//-------------------------------------------------
// User State initial values
//-------------------------------------------------
const customerDetails = SignUpInitialValues
const sellerDetails = SignUpInitialValues
export const CustomerStateInitialValue = { customerState: false, customerDetails };
export const SellerStateInitialValue = { sellerState: false, sellerDetails };
