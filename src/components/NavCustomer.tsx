import styled from "@emotion/styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import styles from "../styles";
import ActiveLink from "./shared/Link/ActiveLink";
import MuiButton from "./shared/MuiButton";
import NavLink from "./shared/Link/NavLink";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ---------------
// main component
// ---------------
const NavCustomer = () => {
  return (
    <Holder>
      <div className="categories">
        <ActiveLink to="/men">MEN</ActiveLink>
        <ActiveLink to="/women">WOMEN</ActiveLink>
        <ActiveLink to="/boys">BOYS</ActiveLink>
        <ActiveLink to="/girls">GIRLS</ActiveLink>
        <ActiveLink to="/baby">BABY</ActiveLink>
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>

      <NavLink to="/signincustomer"> Login / Register </NavLink>
      <ShoppingCartOutlinedIcon />
      <MuiButton className="checkout-button">CHECKOUT</MuiButton>
      <NavLink className="sell" to="/additem">
        SELL
      </NavLink>
    </Holder>
  );
};

export default NavCustomer;

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  display: flex;
  padding: 1.5em 0 1.5em 10em;
  align-items: center;
  gap: 1.5em;
  font-size: 0.9em;

  .categories {
    display: flex;
    a {
      gap: 0.8em;
      padding: 0.8em;
      text-decoration: none;
      border: 1px solid ${colors.darkBlue};
      :hover {
        border: 1px solid #ffffff;
      }
    }
  }

  .checkout-button {
    background-color: ${colors.green};
    opacity: 0.8;
    ${fonts.semiBold}
    :hover {
      opacity: 1;
      background-color: ${colors.green};
    }
  }
`;
