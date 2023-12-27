import styled from "@emotion/styled";
import { Navigate, Outlet } from "react-router-dom";
import styles from "../styles";
import NavSeller from "../components/pageLayout/NavSeller";
import Footer from "../components/pageLayout/Footer";
import Logo from "../components/shared/Logo";
import { useSelector } from "../redux/Store/hooks";

// ----------------
// style variables
// ----------------
const { fonts } = styles;

// ---------------
// main component
// ---------------
const SellerLayout = () => {
  // ------------------------------
  // check if any seller is logged in
  // ------------------------------
  const sellersDetails = useSelector((state) => state.sellersDetails);
  const isLoggedIn = sellersDetails.find((sellerDetail) => sellerDetail.isActive);

  return (
    <>
      {isLoggedIn ? (
        <Holder>
          <Logo />
          <>
            <NavSeller />
            <Outlet />
          </>

          <Footer />
        </Holder>
      ) : (
        <Navigate to="/signinseller" replace={true} />
      )}
    </>
  );
};

export default SellerLayout;

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content auto 20em;
  ${fonts.regular}
`;
