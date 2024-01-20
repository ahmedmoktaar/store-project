import { useDispatch } from "../redux/Store/hooks";
import {
  ProductChangeableValues,
  ProductValues,
  ProductInCartType,
} from "../assets/data/GlobalVariables";
import { removeProductFromCart, addProductToCart } from "../redux/features/Cart/CartSlice";
import useReduxCustomer from "./useReduxCustomer";

// ------------------
// main component
// ------------------
const useManageProduct = (product: ProductValues | ProductInCartType) => {
  const dispatch = useDispatch();
  const { activeCustomerID, originalProduct } = useReduxCustomer(product);

  // -------------------
  // Product remove
  // -------------------
  const removeProduct = () => {
    if (typeof product.colors === "string") {
      const item = product as ProductInCartType;
      dispatch(
        removeProductFromCart({
          orderID: item.orderID,
          customerID: activeCustomerID || null,
        })
      );
    }
  };

  // -------------------
  // Product add
  // -------------------
  const addProduct = (ChangedValues: ProductChangeableValues) => {
    dispatch(
      addProductToCart({
        product: { ...originalProduct, ...ChangedValues, orderID: 0 },
        customerID: activeCustomerID || null,
      })
    );
  };

  return {
    removeProduct,
    addProduct,
  };
};

export default useManageProduct;
