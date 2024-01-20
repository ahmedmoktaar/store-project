import styled from "@emotion/styled";
import SVG from "../../assets/SVG";
import styles from "../../styles";
import Link from "./Link/Link";
import { useContext } from "react";
import { HiddenContext } from "../../hooks/context";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ---------------
// main component
// ---------------
const Logo = () => {
  const hidden = useContext(HiddenContext);

  return (
    <Holder className="logo" hidden={hidden}>
      <Link to="/">
        <SVG.logo />
      </Link>
    </Holder>
  );
};

export default Logo;

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  position: absolute;
  left: 3em;
  top: 0.8em;
  text-align: center;
  color: ${colors.darkBlue};
  ${fonts.light}
  border: 1px solid transparent;

  :hover {
    border: 1px solid white;
  }
`;
