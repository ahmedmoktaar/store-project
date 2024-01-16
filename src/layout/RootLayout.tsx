import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { createStore, values as idbValues } from "idb-keyval";
import Footer from "../components/pageLayout/Footer";
import Logo from "../components/shared/Logo";
import NavCustomer from "../components/pageLayout/NavCustomer";
import styles from "../styles";
import { useDispatch, useSelector } from "../redux/Store/hooks";
import { updateCartFromIDB } from "../redux/features/Cart/CartSlice";
import { ProductInCartType } from "../assets/data/GlobalVariables";
import { useEffect } from "react";
import { login } from "../redux/features/customers/CustomerDetailsSlice";
// ----------------
// style variables
// ----------------
const { fonts } = styles;

// ---------------
// main component
// ---------------
const RootLayout = () => {
  // -----------------------------------
  // clone any data stored in IDB
  // -----------------------------------
  const dispatch = useDispatch();
  const customersDetails = useSelector((state) => state.customersDetails);
  const cartProducts = useSelector((state) => state.cart);
  const activeCustomerIndex = customersDetails.findIndex(
    (customerDetails) => customerDetails.isActive
  );
  const customerCart =
    cartProducts[activeCustomerIndex === -1 ? 0 : activeCustomerIndex].customerCart;
  const user = createStore("user", "active");

  useEffect(() => {
    idbValues()
      .then((value: ProductInCartType[]) => {
        if (customerCart.length !== value.length) {
          dispatch(
            updateCartFromIDB({
              products: value,
              customerID: customersDetails[activeCustomerIndex === -1 ? 0 : activeCustomerIndex].id,
            })
          );
        } else {
          for (let i = 0; i < customerCart.length; i++) {
            if (customerCart[i].orderID !== value[i].orderID) {
              dispatch(
                updateCartFromIDB({
                  products: value,
                  customerID:
                    customersDetails[activeCustomerIndex === -1 ? 0 : activeCustomerIndex].id,
                })
              );
              break;
            }
          }
        }
      })
      .catch((err) => console.warn(err));
  }, [activeCustomerIndex, customerCart, customersDetails]);

  useEffect(() => {
    idbValues(user)
      .then((value) => {
        if (activeCustomerIndex === -1 && value[0]) {
          dispatch(login(value[0]));
        }
      })
      .catch((err) => console.warn(err));
  }, [activeCustomerIndex]);

  return (
    <Holder>
      <Logo />
      <>
        <NavCustomer />
        <Outlet />
      </>
      <Footer />
    </Holder>
  );
};

export default RootLayout;

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content auto 20em;
  ${fonts.medium}
`;
