import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Logo from "../components/shared/Logo";

const RootLayout = () => {
  return (
    <Holder>
      <Logo />
      <Outlet />
      <Footer />
    </Holder>
  );
};

export default RootLayout;

const Holder = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 16em;
`;
