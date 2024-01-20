import { updateCartFromIDB } from "../../redux/features/Cart/CartSlice";
import { ProductInCartType } from "../../assets/data/GlobalVariables";
import { login } from "../../redux/features/customers/CustomerDetailsSlice";
import useReduxCustomer from "../../hooks/useReduxCustomer";
import { createStore, values as idbValues } from "idb-keyval";
import { useDispatch } from "../../redux/Store/hooks";

const useCloneIDB = () => {
  const { activeCustomerIndex, activeCustomerID, activeCustomerCart } = useReduxCustomer(null);
  const user = createStore("user", "active");
  const dispatch = useDispatch();

  // -----------------------------------
  // clone any data stored in IDB
  // -----------------------------------
  const idb = () => {
    idbValues()
      .then((value: ProductInCartType[]) => {
        if (activeCustomerCart.length !== value.length) {
          dispatch(
            updateCartFromIDB({
              products: value,
              customerID: activeCustomerID || "admin",
            })
          );
        } else {
          for (let i = 0; i < activeCustomerCart.length; i++) {
            if (activeCustomerCart[i].orderID !== value[i].orderID) {
              dispatch(
                updateCartFromIDB({
                  products: value,
                  customerID: activeCustomerID || "admin",
                })
              );
              break;
            }
          }
        }
      })
      .catch((err) => console.warn(err));

    idbValues(user)
      .then((value) => {
        if (activeCustomerIndex === -1 && value[0]) {
          dispatch(login(value[0]));
        }
      })
      .catch((err) => console.warn(err));
  };
  return { idb, activeCustomerID };
};

export default useCloneIDB;
