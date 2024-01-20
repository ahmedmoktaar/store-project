import styled from "@emotion/styled";
import { ShoppingCartOutlined, AccountCircleOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useState } from "react";
import SearchBar from "../../SearchBar";
import styles from "../../../styles";
import NavLink from "../../shared/Link/NavLink";
import { useDispatch } from "../../../redux/Store/hooks";
import Link from "../../shared/Link/Link";
import { StoreCategories, genderList } from "../../../assets/data/GlobalVariables";
import MuiButton from "../../shared/MuiButton";
import { logout } from "../../../redux/features/customers/CustomerDetailsSlice";
import useReduxCustomer from "../../../hooks/useReduxCustomer";
import DropList from "./DropList";
import useInitCategories from "./useInitCategories";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ---------------
// main component
// ---------------
const NavCustomer = () => {
  // ---------
  // hooks
  // ---------
  const { productsNumInCart, activeCustomerDetails } = useReduxCustomer(null);
  useInitCategories();

  // ------------------------------
  // handle dropdown category list
  // ------------------------------
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const handleOpen = (storeCategory: StoreCategories) => {
    setIsOpen((prevOpenStates) => ({
      ...prevOpenStates,
      [storeCategory]: true,
    }));
  };
  const handleClose = (storeCategory: string) => {
    setIsOpen((prevOpenStates) => ({
      ...prevOpenStates,
      [storeCategory]: false,
    }));
  };

  // ------------------------------
  // handle logout
  // ------------------------------
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout(activeCustomerDetails?.email || ""));
  };

  return (
    <Holder>
      <div className="categories">
        {genderList.map((gender) => {
          const storeCategory = gender.toLowerCase() as StoreCategories;
          return (
            <div
              className="gender-link-wrapper"
              onMouseEnter={() => handleOpen(storeCategory)}
              onMouseLeave={() => handleClose(storeCategory)}
              key={storeCategory}
            >
              <Link to={`/${storeCategory}`} className="gender-link">
                {storeCategory.toUpperCase()}
              </Link>
              <DropList storeCategory={storeCategory} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          );
        })}
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>

      {activeCustomerDetails ? (
        <>
          <NavLink to="/profile" className="user-wrapper">
            <AccountCircleOutlined />
            <span>{activeCustomerDetails?.firstName}</span>
          </NavLink>
        </>
      ) : (
        <NavLink className="user-wrapper" to="/signinuser">
          Login / Register
        </NavLink>
      )}

      <div className="cart-checkout-wrapper">
        <Link to="/cart" className="cart-button">
          <Badge badgeContent={productsNumInCart} color="warning">
            <ShoppingCartOutlined />
          </Badge>
        </Link>

        <Link to="/checkout" className="checkout-button">
          CHECKOUT
        </Link>
      </div>

      <NavLink className="sell" to="/addproduct">
        SELL
      </NavLink>
      {activeCustomerDetails ? (
        <MuiButton
          className="logout"
          color="error"
          variant="contained"
          size="small"
          onClick={handleLogOut}
        >
          Log Out
        </MuiButton>
      ) : null}
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
  justify-content: space-around;
  padding-left: 10em;
  padding-right: 3em;
  align-items: center;
  font-size: 0.9em;
  gap: 0.5em;

  a {
    color: ${colors.white};
    text-decoration: none;
  }

  .categories {
    display: flex;
    .gender-link-wrapper {
      padding: 2em 1.5em;
      :hover {
        background-color: ${colors.lightBlue};
      }
      :active {
        color: ${colors.darkOrange};
      }
      .categories-dropdown-list {
        padding: 1em;
        margin: 2.2em;
        font-size: 0.9em;
        width: 26em;
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        left: 9.4em;
        gap: 1em;
        background-color: ${colors.lightBlue};
        z-index: 1000;
      }
    }
  }

  .user-wrapper {
    margin: 0 1em;
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

  .logout {
    border-radius: 2em;
    padding: 0.5em;
    ${fonts.semiBold}
    color: ${colors.white};
    opacity: 0.7;
    margin: 1em;
    :hover {
      opacity: 1;
    }
  }

  .cart-checkout-wrapper {
    display: flex;
    align-items: center;
    gap: 1em;
    .cart-button {
      position: relative;
      top: 0.2em;
      color: ${colors.white};
      opacity: 0.8;
      svg {
        font-size: 2.2em;
        opacity: 0.8;
        color: ${colors.darkOrange};
        :hover {
          opacity: 1;
        }
        :active {
          color: ${colors.white};
        }
      }
    }

    .checkout-button {
      background-color: ${colors.green};
      opacity: 0.8;
      padding: 0.5em;
      border-radius: 2em;
      margin: 1em;
      ${fonts.semiBold}
      :hover {
        opacity: 1;
        background-color: ${colors.green};
        color: ${colors.white};
      }
      :active {
        color: ${colors.darkBlue};
      }
    }
  }
`;
