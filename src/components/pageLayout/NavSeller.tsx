import styled from "@emotion/styled";
import ActiveLink from "../shared/Link/ActiveLink";
import styles from "../../styles";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ---------------
// main component
// ---------------
const NavSeller = () => {
  return (
    <Holder>
      <ActiveLink to="/additem">Add New Item</ActiveLink>

      <ActiveLink to="/trackitems">Track Your Item</ActiveLink>

      <ActiveLink className="home-page" to="/">
        Go To Home Page
      </ActiveLink>
    </Holder>
  );
};

export default NavSeller;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.nav`
  background-color: ${colors.darkBlue};
  padding: 1.8em;
  ${fonts.medium}
  font-size: 1.1em;
  a {
    padding: 0.5em;
    &:first-of-type {
      margin-left: 8em;
      margin-right: 1em;
    }
  }

  .home-page {
    position: absolute;
    margin: 1.4em 4em;
    right: 0;
    top: 0;
    opacity: 1;
    color: ${colors.orange};
  }
`;
