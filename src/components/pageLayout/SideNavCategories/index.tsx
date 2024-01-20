import { useState } from "react";
import styled from "@emotion/styled";
import { List, ListItem, Collapse } from "@mui/material";
import { ArrowDropUpOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import { StoreCategories } from "../../../assets/data/GlobalVariables";
import ActiveLink from "../../shared/Link/ActiveLink";
import styles from "../../../styles";
import { useDispatch, useSelector } from "../../../redux/Store/hooks";
import { arrangeCategories } from "../../../redux/features/Products/ProductsSlice";
import Breadcrumbs from "./Breadcrumbs";
import trim_lowerCase from "../../../utils/trim_lowerCase";

// ------------------
// props type
// ------------------
interface Props {
  storeCategory: StoreCategories;
}

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ------------------
// main component
// ------------------
const SideNavCategories: React.FC<Props> = ({ storeCategory }) => {
  // ------------------------------
  // handle categories expanding
  // ------------------------------
  const [isExpanded, setExpanded] = useState(true);
  const handleCategoriesOnClick = () => {
    setExpanded(!isExpanded);
  };

  // ------------------------------
  // handle category onClick
  // ------------------------------
  const dispatch = useDispatch();
  const handleClick = (index: number) => {
    dispatch(arrangeCategories({ index: index, storeCategory: storeCategory }));

    window.scrollTo({
      top: 0,
    });
  };

  // ------------------------------------------------------------------
  //  in-store Products categories array for every storeCategory
  // ------------------------------------------------------------------
  const StoreCategoryProductsCategories = useSelector(
    (state) => state.storeProducts.productsCategories[storeCategory]
  );

  return (
    <Holder>
      <Breadcrumbs storeCategory={storeCategory} />

      <List className="categories-toggle">
        <ListItem onClick={handleCategoriesOnClick}>
          <header>
            <span>Categories</span>
            {isExpanded ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
          </header>
        </ListItem>

        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <List disablePadding className="categories-wrapper">
            {StoreCategoryProductsCategories.map((category, index) => (
              <ListItem key={category}>
                <ActiveLink to={`${trim_lowerCase(category)}`} onClick={() => handleClick(index)}>
                  {category}
                </ActiveLink>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Holder>
  );
};

export default SideNavCategories;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.4em;
    justify-content: center;
  }

  svg {
    height: 1.2em;
    width: 1.2em;
    display: inline-block;
  }

  li {
    padding: 0;
    width: max-content;
  }

  header {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: ${colors.orange};
    padding: 0.9em;
    border-radius: 3em;
    ${fonts.bold}
  }

  .breadcrumb {
    margin: 1em 0 0 2em;
    ${fonts.semiBold}
    font-size: 0.8em;
    a {
      text-transform: uppercase;
    }
  }

  .categories-toggle {
    margin-top: 3em;
  }

  .categories-wrapper {
    li {
      padding: 0.3em;
    }

    a {
      border: 1px solid ${colors.darkBlue};
      color: ${colors.darkBlue};
      opacity: 1;
      padding: 0.5em;
      font-size: 0.8em;
      border-radius: 3em;
      &.active {
        background-color: ${colors.orange};
      }
      :hover {
        border: 1px solid ${colors.white};
        background-color: ${colors.orange};
      }
    }
  }
`;
