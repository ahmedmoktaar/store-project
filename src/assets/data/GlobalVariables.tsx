//-------------------------------------------------
// Sellers values type
//-------------------------------------------------
export interface SellerDetails {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword: string;
  paypal: string;
  website?: string;
}

//-------------------------------------------------
// Sign up initial values
//-------------------------------------------------
export const SignUpInitialValues: SellerDetails = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  paypal: "",
  website: "",
};

//-------------------------------------------------
// Admin details as a seller + initial value for seller
//-------------------------------------------------
export const AdminDetails: SellerDetails[] = [
  {
    firstName: "admin",
    lastName: "",
    email: "admin@example.com",
    password: "123456zZ#",
    confirmPassword: "123456zZ#",
    paypal: "none",
    website: "",
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
