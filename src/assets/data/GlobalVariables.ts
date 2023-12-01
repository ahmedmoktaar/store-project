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
  colors: string[];
  sizes: string[];
  categories: string;
  description: string;
  gender: string;
  mainPic: FileList[] | string[] | null;
  media: FileList[] | string[] | null;
  amountInStock: number;
  deliveryTime: string;
  id: number;
}

//-------------------------------------------------
// Item details initial values
//-------------------------------------------------
export const itemInitialValues: ItemValues = {
  name: "",
  brand: "",
  price: "",
  colors: [],
  sizes: [],
  categories: "",
  description: "",
  gender: "",
  mainPic: null,
  media: null,
  amountInStock: 0,
  deliveryTime: "",
  id: 0,
};

//-------------------------------------------------
// Item changeable values type
//-------------------------------------------------
export interface ItemChangeableValues {
  colors: string[];
  sizes: string[];
  amount: string;
}

//-------------------------------------------------
// Item changeable values in the modal
//-------------------------------------------------
export const itemChangeableInitialValues: ItemChangeableValues = {
  colors: [],
  sizes: [],
  amount: "1",
};

//-------------------------------------------------
// User State initial values
//-------------------------------------------------
const customerDetails = SignUpInitialValues; //customer//
export const CustomerStateInitialValue = {
  customerState: false,
  customerDetails,
};
const sellerDetails = SignUpInitialValues; //seller//
export const SellerStateInitialValue = { sellerState: false, sellerDetails };

//-------------------
// Colors List
//-------------------
export const colorsList = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Orange",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Teal",
  "Cyan",
  "Lime",
  "Magenta",
  "Silver",
  "Gold",
  "Beige",
  "Turquoise",
  "Olive",
  "Maroon",
  "Salmon",
  "Indigo",
  "Violet",
  "Aqua",
  "Sky Blue",
  "Slate Gray",
  "Lavender",
  "Khaki",
  "Crimson",
  "Rose",
  "Navy",
  "Chocolate",
  "Plum",
  "Ivory",
  "Chartreuse",
  "Tan",
  "Mint",
  "Tomato",
  "Sienna",
  "Orchid",
  "Periwinkle",
  "Aquamarine",
  "Steel Blue",
  "Slate Blue",
  "Coral",
];

//-------------------
// Size List
//-------------------
export const sizeList = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];

//-------------------
// Brands List
//-------------------
export const brandsList = [
  "Adidas",
  "Abercrombie & Fitch",
  "Alexander McQueen",
  "Armani",
  "Balenciaga",
  "Burberry",
  "Calvin Klein",
  "Chanel",
  "Dior",
  "Dolce & Gabbana",
  "Fendi",
  "Gucci",
  "H&M",
  "Hugo Boss",
  "Lacoste",
  "Levi's",
  "Louis Vuitton",
  "Mango",
  "Michael Kors",
  "New Balance",
  "Nike",
  "Prada",
  "Puma",
  "Ralph Lauren",
  "Ray-Ban",
  "Reebok",
  "Tommy Hilfiger",
  "Under Armour",
  "Versace",
  "Vans",
];

//-------------------
// Gender List
//-------------------
export const genderList = ["Male", "Female", "Baby"];

//---------------------------------
// categories name in redux store
//---------------------------------
export type storeCategories = "men" | "women" | "baby";

//---------------------------------
// categories name in redux store
//---------------------------------
export const storeCategoriesList = ["men", "women", "baby"];

//---------------------------------
// Gender type
//---------------------------------
export type Gender = "Male" | "Female" | "Baby";

//---------------------------------
// all clothes in object array
//---------------------------------
export const clothesCategoriesList = [
  { gender: "Male", label: "T-Shirts", key: "MaleT-Shirts" },
  { gender: "Male", label: "Jeans", key: "MaleJeans" },
  { gender: "Male", label: "Jackets", key: "MaleJackets" },
  { gender: "Male", label: "Sweaters", key: "MaleSweaters" },
  { gender: "Male", label: "Shirts", key: "MaleShirts" },
  { gender: "Male", label: "Trousers", key: "MaleTrousers" },
  { gender: "Male", label: "Pants", key: "MalePants" },
  { gender: "Male", label: "Hoodies", key: "MaleHoodies" },
  { gender: "Male", label: "Suits", key: "MaleSuits" },
  { gender: "Male", label: "Activewear", key: "MaleActivewear" },
  { gender: "Male", label: "Vests", key: "MaleVests" },
  { gender: "Male", label: "Blazers", key: "MaleBlazers" },
  {
    gender: "Male",
    label: "Long Sleeve T-shirts",
    key: "MaleLong Sleeve T-shirts",
  },
  { gender: "Male", label: "Underwear", key: "MaleUnderwear" },
  { gender: "Male", label: "Swimwear", key: "MaleSwimwear" },
  { gender: "Male", label: "Sleepwear", key: "MaleSleepwear" },
  { gender: "Male", label: "Belts", key: "MaleBelts" },
  { gender: "Male", label: "Ties", key: "MaleTies" },
  { gender: "Male", label: "Hats", key: "MaleHats" },
  { gender: "Male", label: "Gloves", key: "MaleGloves" },
  { gender: "Male", label: "Sweatshirts", key: "MaleSweatshirts" },
  { gender: "Male", label: "Sportswear", key: "MaleSportswear" },
  { gender: "Male", label: "Denim Jackets", key: "MaleDenim Jackets" },
  { gender: "Male", label: "Cargo Pants", key: "MaleCargo Pants" },
  { gender: "Male", label: "Beanies", key: "MaleBeanies" },
  { gender: "Male", label: "Leather Jackets", key: "MaleLeather Jackets" },
  { gender: "Male", label: "Khaki Pants", key: "MaleKhaki Pants" },
  { gender: "Male", label: "Polo Shirts", key: "MalePolo Shirts" },
  { gender: "Male", label: "Track Pants", key: "MaleTrack Pants" },
  { gender: "Male", label: "Tank Tops", key: "MaleTank Tops" },
  { gender: "Male", label: "Plain T-Shirts", key: "MalePlain T-Shirts" },
  {
    gender: "Male",
    label: "Crew Neck Sweaters",
    key: "MaleCrew Neck Sweaters",
  },
  { gender: "Male", label: "Chinos", key: "MaleChinos" },
  { gender: "Male", label: "Windbreakers", key: "MaleWindbreakers" },
  { gender: "Male", label: "Formal Shirts", key: "MaleFormal Shirts" },
  { gender: "Male", label: "Cargo Shorts", key: "MaleCargo Shorts" },

  { gender: "Female", label: "Dresses", key: "FemaleDresses" },
  { gender: "Female", label: "Tops", key: "FemaleTops" },
  { gender: "Female", label: "Jeans", key: "FemaleJeans" },
  { gender: "Female", label: "Jackets", key: "FemaleJackets" },
  { gender: "Female", label: "Sweaters", key: "FemaleSweaters" },
  { gender: "Female", label: "Skirts", key: "FemaleSkirts" },
  { gender: "Female", label: "Pants", key: "FemalePants" },
  { gender: "Female", label: "Blouses", key: "FemaleBlouses" },
  { gender: "Female", label: "Suits", key: "FemaleSuits" },
  { gender: "Female", label: "Activewear", key: "FemaleActivewear" },
  { gender: "Female", label: "Vests", key: "FemaleVests" },
  { gender: "Female", label: "Blazers", key: "FemaleBlazers" },
  { gender: "Female", label: "Socks", key: "FemaleSocks" },
  { gender: "Female", label: "Underwear", key: "FemaleUnderwear" },
  { gender: "Female", label: "Swimwear", key: "FemaleSwimwear" },
  { gender: "Female", label: "Sleepwear", key: "FemaleSleepwear" },
  { gender: "Female", label: "Belts", key: "FemaleBelts" },
  { gender: "Female", label: "Scarves", key: "FemaleScarves" },
  { gender: "Female", label: "Hats", key: "FemaleHats" },
  { gender: "Female", label: "Gloves", key: "FemaleGloves" },
  { gender: "Female", label: "Sweatshirts", key: "FemaleSweatshirts" },
  { gender: "Female", label: "Sportswear", key: "FemaleSportswear" },
  {
    gender: "Female",
    label: "Denim Jackets",
    key: "FemaleDenim Jackets",
  },
  { gender: "Female", label: "Leggings", key: "FemaleLeggings" },
  { gender: "Female", label: "Beanies", key: "FemaleBeanies" },
  {
    gender: "Female",
    label: "Leather Jackets",
    key: "FemaleLeather Jackets",
  },
  { gender: "Female", label: "Khaki Pants", key: "FemaleKhaki Pants" },
  { gender: "Female", label: "Tank Tops", key: "FemaleTank Tops" },
  { gender: "Female", label: "V-Neck Tops", key: "FemaleV-Neck Tops" },
  { gender: "Female", label: "Maxi Dresses", key: "FemaleMaxi Dresses" },
  { gender: "Female", label: "Jumpsuits", key: "FemaleJumpsuits" },
  { gender: "Female", label: "Cardigans", key: "FemaleCardigans" },
  {
    gender: "Female",
    label: "Floral Dresses",
    key: "FemaleFloral Dresses",
  },
  {
    gender: "Female",
    label: "Wide-Leg Pants",
    key: "FemaleWide-Leg Pants",
  },
  { gender: "Female", label: "Crop Tops", key: "FemaleCrop Tops" },
  { gender: "Female", label: "High Heels", key: "FemaleHigh Heels" },

  { gender: "Baby", label: "Onesies", key: "BabyOnesies" },
  { gender: "Baby", label: "Pajamas", key: "BabyPajamas" },
  { gender: "Baby", label: "Rompers", key: "BabyRompers" },
  { gender: "Baby", label: "Bodysuits", key: "BabyBodysuits" },
  { gender: "Baby", label: "T-Shirts", key: "BabyT-Shirts" },
  { gender: "Baby", label: "Pants", key: "BabyPants" },
  { gender: "Baby", label: "Dresses", key: "BabyDresses" },
  { gender: "Baby", label: "Sweaters", key: "BabySweaters" },
  { gender: "Baby", label: "Jackets", key: "BabyJackets" },
  { gender: "Baby", label: "Socks", key: "BabySocks" },
  { gender: "Baby", label: "Hats", key: "BabyHats" },
  { gender: "Baby", label: "Shoes", key: "BabyShoes" },
  { gender: "Baby", label: "Mittens", key: "BabyMittens" },
  { gender: "Baby", label: "Bibs", key: "BabyBibs" },
  { gender: "Baby", label: "Blankets", key: "BabyBlankets" },
  { gender: "Baby", label: "Onesies Sets", key: "BabyOnesies Sets" },
  { gender: "Baby", label: "Sleepsuits", key: "BabySleepsuits" },
  { gender: "Baby", label: "Overalls", key: "BabyOveralls" },
  { gender: "Baby", label: "Hoodies", key: "BabyHoodies" },
  { gender: "Baby", label: "Swimwear", key: "BabySwimwear" },
  { gender: "Baby", label: "Diaper Covers", key: "BabyDiaper Covers" },
  { gender: "Baby", label: "Trousers", key: "BabyTrousers" },
  { gender: "Baby", label: "Tights", key: "BabyTights" },
  { gender: "Baby", label: "Headbands", key: "BabyHeadbands" },
  {
    gender: "Baby",
    label: "Onesies with Feet",
    key: "BabyOnesies with Feet",
  },
  { gender: "Baby", label: "Sleepers", key: "BabySleepers" },
  { gender: "Baby", label: "Jumpsuits", key: "BabyJumpsuits" },
  { gender: "Baby", label: "Cardigans", key: "BabyCardigans" },
  {
    gender: "Baby",
    label: "Onesies with Mittens",
    key: "BabyOnesies with Mittens",
  },
  { gender: "Baby", label: "Kimonos", key: "BabyKimonos" },
  { gender: "Baby", label: "Tutus", key: "BabyTutus" },
  { gender: "Baby", label: "Leggings", key: "BabyLeggings" },
  {
    gender: "Baby",
    label: "Overalls with Snaps",
    key: "BabyOveralls with Snaps",
  },
  {
    gender: "Baby",
    label: "Bodysuits with Collars",
    key: "BabyBodysuits with Collars",
  },
  { gender: "Baby", label: "Beanies", key: "BabyBeanies" },
];

//-------------------------------------------------
// Function to Filter clothes categories by gender
//--------------------------------------------------
export const categoriesByGender = (gender: Gender) => {
  return clothesCategoriesList
    .map((category) => (category.gender === gender ? category.label : null))
    .filter((element): element is string => element !== null);
};

//-----------------------------------------------------------------
// Function to transform string (lowerCase and remove whiteSpace)
//-----------------------------------------------------------------
export const trim_lowerCase = (para: string) =>
  para.toLowerCase().replace(/ /g, "-");
