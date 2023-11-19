import styled from "@emotion/styled";
import { Navigate, Outlet } from "react-router-dom";
import styles from "../styles";
import NavSeller from "../components/NavSeller";
import Footer from "../components/Footer";
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
  const isLoggedIn = useSelector((state) => state.isloggedin.userState);

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
  grid-template-rows: max-content auto 16em;
  ${fonts.regular}
`;
