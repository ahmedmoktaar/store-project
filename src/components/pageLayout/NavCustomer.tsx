import styled from "@emotion/styled";
import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import SearchBar from "../SearchBar";
import styles from "../../styles";
import MuiButton from "../shared/MuiButton";
import NavLink from "../shared/Link/NavLink";
import { useDispatch, useSelector } from "../../redux/Store/hooks";
import { useState } from "react";
import Link from "../shared/Link/Link";
import { arrangeCategories } from "../../redux/features/items/AvailableCategories/AvailableCategoriesSlice";
import {
  storeCategoriesList,
  trim_lowerCase,
} from "../../assets/data/GlobalVariables";

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

  // ------------------------------
  // handle dropdown category list
  // ------------------------------
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const handleOpen = (storeCategory: string) => {
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
  // handle category onClick
  // ------------------------------
  const dispatch = useDispatch();
  const handleClick = (index: number) => {
    dispatch(arrangeCategories(index));
    window.scrollTo({
      top: 0,
    });
  };

  // ------------------------------------
  // categories array for in-store clothes
  // ------------------------------------
  const StorefilteredCategory = useSelector(
    (state) => state.availableCategories
  );

  return (
    <Holder>
      <div className="categories">
        {storeCategoriesList.map((storeCategory) => {
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

              {isOpen[storeCategory] && (
                <div className="categories-dropdown-list">
                  {StorefilteredCategory.map((category, index) => (
                    <Link
                      to={`/${storeCategory}/${trim_lowerCase(category)}`}
                      onClick={() => {
                        return handleClick(index), handleClose;
                      }}
                      key={category}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
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
        <NavLink className="user-wrapper" to="/signincustomer">
          Login / Register
        </NavLink>
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
      padding: 2em;
      :hover {
        background-color: ${colors.lightBlue};
      }
      :active{
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
        left: 8.9em;
        gap: 1em;
        background-color: ${colors.lightBlue};
        z-index: 1000;
      }
    }
  }

  .user-wrapper {
    margin:0 1em;
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
