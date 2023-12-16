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
  "Mengo",
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

//---------------------------------
// Gender type & List
//---------------------------------
export type Gender = "Men" | "Women" | "Baby";
export const genderList:Gender[] = ["Men", "Women", "Baby"];

//-----------------------------------------
// categories type in redux store & List 
//-----------------------------------------
export type StoreCategories = "men" | "women" | "baby";
export const storeCategoriesList: StoreCategories[] = ["men", "women", "baby"];


//---------------------------------
// all clothes in object array
//---------------------------------
export const clothesCategoriesList = [
  { gender: "Men", label: "T-Shirts", key: "MenT-Shirts" },
  { gender: "Men", label: "Jeans", key: "MenJeans" },
  { gender: "Men", label: "Jackets", key: "MenJackets" },
  { gender: "Men", label: "Sweaters", key: "MenSweaters" },
  { gender: "Men", label: "Shirts", key: "MenShirts" },
  { gender: "Men", label: "Trousers", key: "MenTrousers" },
  { gender: "Men", label: "Pants", key: "MenPants" },
  { gender: "Men", label: "Hoodies", key: "MenHoodies" },
  { gender: "Men", label: "Suits", key: "MenSuits" },
  { gender: "Men", label: "Activewear", key: "MenActivewear" },
  { gender: "Men", label: "Vests", key: "MenVests" },
  { gender: "Men", label: "Blazers", key: "MenBlazers" },
  {
    gender: "Men",
    label: "Long Sleeve T-shirts",
    key: "MenLong Sleeve T-shirts",
  },
  { gender: "Men", label: "Underwear", key: "MenUnderwear" },
  { gender: "Men", label: "Swimwear", key: "MenSwimwear" },
  { gender: "Men", label: "Sleepwear", key: "MenSleepwear" },
  { gender: "Men", label: "Belts", key: "MenBelts" },
  { gender: "Men", label: "Ties", key: "MenTies" },
  { gender: "Men", label: "Hats", key: "MenHats" },
  { gender: "Men", label: "Gloves", key: "MenGloves" },
  { gender: "Men", label: "Sweatshirts", key: "MenSweatshirts" },
  { gender: "Men", label: "Sportswear", key: "MenSportswear" },
  { gender: "Men", label: "Denim Jackets", key: "MenDenim Jackets" },
  { gender: "Men", label: "Cargo Pants", key: "MenCargo Pants" },
  { gender: "Men", label: "Beanies", key: "MenBeanies" },
  { gender: "Men", label: "Leather Jackets", key: "MenLeather Jackets" },
  { gender: "Men", label: "Khaki Pants", key: "MenKhaki Pants" },
  { gender: "Men", label: "Polo Shirts", key: "MenPolo Shirts" },
  { gender: "Men", label: "Track Pants", key: "MenTrack Pants" },
  { gender: "Men", label: "Tank Tops", key: "MenTank Tops" },
  { gender: "Men", label: "Plain T-Shirts", key: "MenPlain T-Shirts" },
  {
    gender: "Men",
    label: "Crew Neck Sweaters",
    key: "MenCrew Neck Sweaters",
  },
  { gender: "Men", label: "Chinos", key: "MenChinos" },
  { gender: "Men", label: "Windbreakers", key: "MenWindbreakers" },
  { gender: "Men", label: "Formal Shirts", key: "MenFormal Shirts" },
  { gender: "Men", label: "Cargo Shorts", key: "MenCargo Shorts" },

  { gender: "Women", label: "Dresses", key: "WomenDresses" },
  { gender: "Women", label: "Tops", key: "WomenTops" },
  { gender: "Women", label: "Jeans", key: "WomenJeans" },
  { gender: "Women", label: "Jackets", key: "WomenJackets" },
  { gender: "Women", label: "Sweaters", key: "WomenSweaters" },
  { gender: "Women", label: "Skirts", key: "WomenSkirts" },
  { gender: "Women", label: "Pants", key: "WomenPants" },
  { gender: "Women", label: "Blouses", key: "WomenBlouses" },
  { gender: "Women", label: "Suits", key: "WomenSuits" },
  { gender: "Women", label: "Activewear", key: "WomenActivewear" },
  { gender: "Women", label: "Vests", key: "WomenVests" },
  { gender: "Women", label: "Blazers", key: "WomenBlazers" },
  { gender: "Women", label: "Socks", key: "WomenSocks" },
  { gender: "Women", label: "Underwear", key: "WomenUnderwear" },
  { gender: "Women", label: "Swimwear", key: "WomenSwimwear" },
  { gender: "Women", label: "Sleepwear", key: "WomenSleepwear" },
  { gender: "Women", label: "Belts", key: "WomenBelts" },
  { gender: "Women", label: "Scarves", key: "WomenScarves" },
  { gender: "Women", label: "Hats", key: "WomenHats" },
  { gender: "Women", label: "Gloves", key: "WomenGloves" },
  { gender: "Women", label: "Sweatshirts", key: "WomenSweatshirts" },
  { gender: "Women", label: "Sportswear", key: "WomenSportswear" },
  {
    gender: "Women",
    label: "Denim Jackets",
    key: "WomenDenim Jackets",
  },
  { gender: "Women", label: "Leggings", key: "WomenLeggings" },
  { gender: "Women", label: "Beanies", key: "WomenBeanies" },
  {
    gender: "Women",
    label: "Leather Jackets",
    key: "WomenLeather Jackets",
  },
  { gender: "Women", label: "Khaki Pants", key: "WomenKhaki Pants" },
  { gender: "Women", label: "Tank Tops", key: "WomenTank Tops" },
  { gender: "Women", label: "V-Neck Tops", key: "WomenV-Neck Tops" },
  { gender: "Women", label: "Maxi Dresses", key: "WomenMaxi Dresses" },
  { gender: "Women", label: "Jumpsuits", key: "WomenJumpsuits" },
  { gender: "Women", label: "Cardigans", key: "WomenCardigans" },
  {
    gender: "Women",
    label: "Floral Dresses",
    key: "WomenFloral Dresses",
  },
  {
    gender: "Women",
    label: "Wide-Leg Pants",
    key: "WomenWide-Leg Pants",
  },
  { gender: "Women", label: "Crop Tops", key: "WomenCrop Tops" },
  { gender: "Women", label: "High Heels", key: "WomenHigh Heels" },

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
