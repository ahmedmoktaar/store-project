import styled from "@emotion/styled";
import ActiveLink from "./shared/ActiveLink";
import styles from "../styles";

// ----------------
// style variables
// ----------------
const { colors } = styles;

const NavSeller = () => {
  return (
    <Holder>
      <ActiveLink to="/additem">Add New Item</ActiveLink>
      <ActiveLink to="/trackitems">Track Your Item</ActiveLink>
    </Holder>
  );
};

const Holder = styled.nav`
  background-color: ${colors.Blue};
  padding: 0.8em 2em;
  a {
    padding: 1em;
  }
`;

export default NavSeller;
