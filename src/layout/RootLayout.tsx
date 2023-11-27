import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "../components/pageLayout/Footer";
import Logo from "../components/shared/Logo";
import NavCustomer from "../components/pageLayout/NavCustomer";
import styles from "../styles";

// ----------------
// style variables
// ----------------
const { fonts } = styles;

// ---------------
// main component
// ---------------
const RootLayout = () => {
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
