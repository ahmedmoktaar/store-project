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
      <ActiveLink className="home-page" to="/">
        Go To Home Page
      </ActiveLink>
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
    &:first-of-type{
      margin-left: 5em;
    }
  }
  .home-page {
    position: absolute;
    font-size: 0.8em;
    padding: 0.5em;
    margin: 1em 4em;
    right: 0;
    top: 0;
    opacity: 1;
    color: ${colors.orange};
    :hover{
      background-color: ${colors.lightBlue};;
    }
  }
`;

export default NavSeller;
