import { useSelector } from "../redux/Store/hooks";
import {
  StoreCategories,
  productInitialValues,
  ProductInCartType,
  ProductValues,
} from "../assets/data/GlobalVariables";

// ------------------
// main component
// ------------------
const useReduxCustomer = (productToEdit: ProductInCartType | ProductValues | null) => {
  // --------------
  // redux slices
  // --------------
  const reduxCart = useSelector((state) => state.cart);
  const reduxProducts = useSelector((state) => state.storeProducts);
  const reduxCustomerDetails = useSelector((state) => state.customersDetails);

  // ----------------
  //  active customer
  // ----------------
  const activeCustomerDetails = reduxCustomerDetails.find(
    (customerDetails) => customerDetails.isActive
  );
  const activeCustomerID = activeCustomerDetails?.id;
  const activeCustomerIndex = reduxCustomerDetails.findIndex(
    (customerDetails) => customerDetails.isActive
  );
  const productsNumInCart =
    reduxCart[activeCustomerIndex !== -1 ? activeCustomerIndex : 0].customerCart.length;
  const activeCustomerCart =
    reduxCart[activeCustomerIndex === -1 ? 0 : activeCustomerIndex].customerCart;

  // -----------------------------------
  // get original Product details
  // -----------------------------------
  const sellersProducts = reduxProducts.sellersProducts;
  const storeCategoryProducts = (storeCategory: StoreCategories) =>
    sellersProducts.map((sellerProduct) => sellerProduct.sellerProduct[storeCategory]).flat();

  const originalProduct =
    storeCategoryProducts("men").find((orgProduct) => orgProduct.id === productToEdit?.id) ||
    storeCategoryProducts("women").find((orgProduct) => orgProduct.id === productToEdit?.id) ||
    storeCategoryProducts("baby").find((orgProduct) => orgProduct.id === productToEdit?.id) ||
    productInitialValues;

  // --------------------------------------------------------
  // product amount in stock as array to choose order quantity
  // --------------------------------------------------------
  const amountInStockArray = originalProduct
    ? Array.from({ length: originalProduct.amountInStock }, (_, index) => (index + 1).toString())
    : [""];

  return {
    activeCustomerDetails,
    activeCustomerID,
    activeCustomerIndex,
    activeCustomerCart,
    productsNumInCart,
    originalProduct,
    amountInStockArray,
  };
};

export default useReduxCustomer;
