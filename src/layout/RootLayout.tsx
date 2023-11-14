import styled from "@emotion/styled";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Holder>
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
