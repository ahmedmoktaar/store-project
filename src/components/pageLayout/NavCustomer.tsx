import styled from "@emotion/styled";
import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import SearchBar from "../SearchBar";
import styles from "../../styles";
import ActiveLink from "../shared/Link/ActiveLink";
import MuiButton from "../shared/MuiButton";
import NavLink from "../shared/Link/NavLink";
import { useSelector } from "../../redux/Store/hooks";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ---------------
// main component
// ---------------
const NavCustomer = () => {
  // ---------------
  // hooks
  // ---------------
  const LoggedIn = useSelector((state) => state.customerLoggedIn.customerState);
  const customerName = useSelector(
    (state) => state.customerLoggedIn.customerDetails.firstName
  );

  return (
    <Holder>
      <div className="categories">
        <ActiveLink to="/men">MEN</ActiveLink>
        <ActiveLink to="/women">WOMEN</ActiveLink>
        <ActiveLink to="/baby">BABY</ActiveLink>
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>

        {LoggedIn ? (
          <NavLink to="/profile" className="user-wrapper">
            <AccountCircleOutlined />
            <span>{customerName}</span>
          </NavLink>
        ) : (
          <NavLink className="user-wrapper" to="/signincustomer"> Login / Register </NavLink>
        )}

        <ShoppingCartOutlined />

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
  padding: 1.5em 3.5em 1.5em 11em;
  align-items: center;
  gap: 1.5em;
  font-size: 0.9em;

  .categories {
    display: flex;
    gap: 1.5em;
    a {
      padding: 0.8em;
      border: 1px solid ${colors.darkBlue};
      :hover {
        border: 1px solid #ffffff;
      }
    }
  }

  .user-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2em;
    text-decoration: none;
    color: ${colors.yellow};
    svg {
      font-size: 2em;
    }
    span {
      overflow: hidden;
      white-space: nowrap;
      max-width: 8em;
      font-size: 0.8em;
      text-align: center;
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
