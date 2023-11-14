import styled from "@emotion/styled";
import ActiveLink from "./shared/Link/ActiveLink";
import styles from "../styles";

// ----------------
// style variables
// ----------------
const { colors } = styles;

// ---------------
// main component
// ---------------
const NavSeller = () => {
  return (
    <Holder>
      <ActiveLink to="/additem">Add New Item</ActiveLink>
      <ActiveLink to="/trackitems">Track Your Item</ActiveLink>
    </Holder>
  );
};

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.nav`
  background-color: ${colors.Blue};
  font-size: 1.3em;
  padding: 0.9em 2em;
  a {
    padding: 1em;
  }
`;

export default NavSeller;
