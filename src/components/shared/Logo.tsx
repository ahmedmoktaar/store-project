import SVG from "../../assets/SVG";
import styled from "@emotion/styled";
import styles from "../../styles";
import Link from "./Link/Link";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ---------------
// main component
// ---------------
const Logo = () => {
  return (
    <Holder className="logo">
      <Link to="/">
        <SVG.logo />
      </Link>
      <div>Shopping Store</div>
    </Holder>
  );
};

export default Logo;

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  position: absolute;
  left: 2em;
  top: 1em;
  text-align: center;
  color: ${colors.darkBlue};
  ${fonts.light}
`;
