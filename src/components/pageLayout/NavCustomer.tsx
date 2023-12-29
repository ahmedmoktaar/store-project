import styled from "@emotion/styled";
import { ShoppingCartOutlined, AccountCircleOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import styles from "../../styles";
import NavLink from "../shared/Link/NavLink";
import { useDispatch, useSelector } from "../../redux/Store/hooks";
import Link from "../shared/Link/Link";
import {
  Gender,
  StoreCategories,
  trim_lowerCase,
} from "../../assets/data/GlobalVariables";
import UniqueProductCategoryArray from "../shared/UniqueCategoriesArray";
import {
  arrangeCategories,
  initialCategories,
} from "../../redux/features/Products/ProductsSlice";
import MuiButton from "../shared/MuiButton";
import { logout } from "../../redux/features/customers/CustomerDetailsSlice";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ---------------
// main component
// ---------------
const NavCustomer = () => {
  // -----------------------------------
  // check if any customer is logged in
  // -----------------------------------
  const customersDetails = useSelector((state) => state.customersDetails);
  const isLoggedIn = customersDetails.find((customerDetails) => customerDetails.isActive);
  const customerName = isLoggedIn?.firstName;

  // -----------------------------------
  // customer cart index
  // -----------------------------------
  const activeCustomerIndex = customersDetails.findIndex(
    (customerDetails) => customerDetails.isActive
  );

  // ------------------------------
  // products number in cart
  // ------------------------------
  const cartProducts = useSelector((state) => state.cart);
  const productsNumInCart = cartProducts[activeCustomerIndex !== -1 ? activeCustomerIndex : 0].customerCart
      .length - 1;

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
  // category DropList
  // ------------------------------
  const DropList: React.FC<{ storeCategory: StoreCategories }> = ({ storeCategory }) =>
    isOpen[storeCategory] && (
      <div className="categories-dropdown-list">
        {StoreCategoryProductsCategories(storeCategory).map((category, index) => (
          <Link
            to={`/${storeCategory}/${trim_lowerCase(category)}`}
            onClick={() => {
              return handleClick(index, storeCategory), handleClose(storeCategory);
            }}
            key={category}
          >
            {category}
          </Link>
        ))}
      </div>
    );

  // ------------------------------
  // handle category onClick
  // ------------------------------
  const dispatch = useDispatch();
  const handleClick = (index: number, storeCategory: StoreCategories) => {
    dispatch(arrangeCategories({ index: index, storeCategory: storeCategory }));

    window.scrollTo({
      top: 0,
    });
  };

  // ------------------------------
  // handle logout
  // ------------------------------
  const handleLogOut = () => {
    dispatch(logout(isLoggedIn?.email || ""));

    window.scrollTo({
      top: 0,
    });
  };

  // ----------------------------------------------------------------
  //  in-store Products categories array for every storeCategory
  // ----------------------------------------------------------------
  const StoreCategoryProductsCategories = (category: StoreCategories) => {
    return useSelector((state) => state.storeProducts.productsCategories[category]);
  };

  // ------------------------------------------------------
  // initial dispatch in-store categories to redux-store
  // ------------------------------------------------------
  const FilteredCategory = (category: StoreCategories, gender: Gender) => {
    const uniqueCategoriesArray = UniqueProductCategoryArray(category, gender);
    return uniqueCategoriesArray.map((product) => product.categories);
  };

  const menCategories = FilteredCategory("men", "Men");
  const womenCategories = FilteredCategory("women", "Women");
  const babyCategories = FilteredCategory("baby", "Baby");

  useEffect(() => {
    dispatch(
      initialCategories({
        storeCategory: "men",
        categories: menCategories,
      })
    );
    dispatch(
      initialCategories({
        storeCategory: "women",
        categories: womenCategories,
      })
    );
    dispatch(
      initialCategories({
        storeCategory: "baby",
        categories: babyCategories,
      })
    );
  }, []);

  return (
    <Holder>
      <div className="categories">
        <div
          className="gender-link-wrapper"
          onMouseEnter={() => handleOpen("men")}
          onMouseLeave={() => handleClose("men")}
          key="men"
        >
          <Link to="/men" className="gender-link">
            MEN
          </Link>
          <DropList storeCategory="men" />
        </div>

        <div
          className="gender-link-wrapper"
          onMouseEnter={() => handleOpen("women")}
          onMouseLeave={() => handleClose("women")}
          key="women"
        >
          <Link to="/women" className="gender-link">
            WOMEN
          </Link>
          <DropList storeCategory="women" />
        </div>

        <div
          className="gender-link-wrapper"
          onMouseEnter={() => handleOpen("baby")}
          onMouseLeave={() => handleClose("baby")}
          key="baby"
        >
          <Link to="/baby" className="gender-link">
            BABY
          </Link>
          <DropList storeCategory="baby" />
        </div>
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>

      {isLoggedIn ? (
        <>
          <NavLink to="/profile" className="user-wrapper">
            <AccountCircleOutlined />
            <span>{customerName}</span>
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
      {isLoggedIn ? (
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
    margin: 1em;
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
