import styled from "@emotion/styled";
import Footer from "../components/Footer";
import AppRoutes from "../routes/AppRoutes";
import styles from "../styles";

const { fonts } = styles;

const AppRoot = () => {
  return (
    <Holder>
      <AppRoutes />
      <Footer />
    </Holder>
  );
};

export default AppRoot;

const Holder = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 16em;
  ${fonts.regular}
`;
