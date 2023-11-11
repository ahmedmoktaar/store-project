import styled from "@emotion/styled";
import styles from "../styles";
import { Outlet } from "react-router-dom";
import NavSeller from "../components/NavSeller";
import Footer from "../components/Footer";

const { fonts } = styles;

const SellerLayout = () => {
  return (
    <Holder>
      <NavSeller />
      <Outlet />
      <Footer />
    </Holder>
  );
};

export default SellerLayout;

const Holder = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content auto 16em;
  ${fonts.regular}
`;
