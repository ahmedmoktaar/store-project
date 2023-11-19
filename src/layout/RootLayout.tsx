import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Logo from "../components/shared/Logo";
import NavCustomer from "../components/NavCustomer";
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
  grid-template-rows: max-content auto 16em;
  ${fonts.medium}
`;
