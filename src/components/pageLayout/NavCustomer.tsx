import styled from "@emotion/styled";
import { ShoppingCartOutlined, AccountCircleOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import styles from "../../styles";
import NavLink from "../shared/Link/NavLink";
import { useDispatch, useSelector } from "../../redux/Store/hooks";
import Link from "../shared/Link/Link";
import { StoreCategories, trim_lowerCase } from "../../assets/data/GlobalVariables";
import {
  menArrangeCategories,
  menInitialCategories,
} from "../../redux/features/items/ItemDetails/MenSlice";
import UniqueCategoriesArray from "../shared/UniqueCategoriesArray";
import {
  womenArrangeCategories,
  womenInitialCategories,
} from "../../redux/features/items/ItemDetails/WomenSlice";
import {
  babyArrangeCategories,
  babyInitialCategories,
} from "../../redux/features/items/ItemDetails/BabySlice";

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
  const loggedin = useSelector((state) => state.customerLoggedIn.customerState);
  const itemsNumInCart = useSelector((state) => state.cart).length - 1;
  const customerName = useSelector(
    (state) => state.customerLoggedIn.customerDetails.firstName
  );

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
        {StoreCategoryfilteredCategories(storeCategory).map((category, index) => (
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
    switch (storeCategory) {
      case "men":
        dispatch(menArrangeCategories(index));
        break;
      case "women":
        dispatch(womenArrangeCategories(index));
        break;
      case "baby":
        dispatch(babyArrangeCategories(index));
        break;
      default:
        null;
    }

    window.scrollTo({
      top: 0,
    });
  };

  // ----------------------------------------------------------------
  //  in-store clothes categories array for every store-category
  // ----------------------------------------------------------------
  const StoreCategoryfilteredCategories = (category: StoreCategories) => {
    return useSelector((state) => state[category].Categories);
  };

  // ------------------------------------------------------
  // initial dispatch in-store categories to redux-store
  // ------------------------------------------------------
  const makeOneItemPerCategoryMen = UniqueCategoriesArray("men", "Men");
  const filterMenCategory = makeOneItemPerCategoryMen.map((item) => item.categories);

  const makeOneItemPerCategoryWomen = UniqueCategoriesArray("women", "Women");
  const filterWomenCategory = makeOneItemPerCategoryWomen.map((item) => item.categories);

  const makeOneItemPerCategoryBaby = UniqueCategoriesArray("baby", "Baby");
  const filterBabyCategory = makeOneItemPerCategoryBaby.map((item) => item.categories);

  useEffect(() => {
    dispatch(menInitialCategories(filterMenCategory));
    dispatch(womenInitialCategories(filterWomenCategory));
    dispatch(babyInitialCategories(filterBabyCategory));
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

      {loggedin ? (
        <NavLink to="/profile" className="user-wrapper">
          <AccountCircleOutlined />
          <span>{customerName}</span>
        </NavLink>
      ) : (
        <NavLink className="user-wrapper" to="/signincustomer">
          Login / Register
        </NavLink>
      )}

      <div className="cart-checkout-wrapper">
        <Link to="/cart" className="cart-button">
          <Badge badgeContent={itemsNumInCart} color="warning">
            <ShoppingCartOutlined />
          </Badge>
        </Link>

        <Link to="/checkout" className="checkout-button">
          CHECKOUT
        </Link>
      </div>

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
