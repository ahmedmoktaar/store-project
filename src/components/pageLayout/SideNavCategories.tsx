import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { List, ListItem, Collapse } from "@mui/material";
import {
  ArrowDropUpOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import {
  storeCategories,
  Gender,
  trim_lowerCase,
} from "../../assets/data/GlobalVariables";
import ActiveLink from "../shared/Link/ActiveLink";
import styles from "../../styles";
import { useDispatch, useSelector } from "../../redux/Store/hooks";
import {
  arrangeCategories,
  initialAvailableCategories,
} from "../../redux/features/items/AvailableCategories/AvailableCategoriesSlice";
import UniqueCategoriesArray from "../shared/UniqueCategoriesArray";

// ------------------
// props type
// ------------------
interface Props {
  gender: Gender;
  storeCategory: storeCategories;
}

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ------------------
// main component
// ------------------
const SideNavCateogries: React.FC<Props> = ({ storeCategory, gender }) => {
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
  const makeOneItemPerCategory = UniqueCategoriesArray(storeCategory, gender);
  const filteredCategory = makeOneItemPerCategory.map(
    (item) => item.categories
  );

  // ------------------------------------------
  // dispatch in-store categories to redux-store
  // ------------------------------------------
  useEffect(() => {
    dispatch(initialAvailableCategories(filteredCategory));
  }, []);

  return (
    <Holder>
      <List>
        <ListItem onClick={handleCategoriesOnClick}>
          <header>
            <span>Categories</span>
            {isExpanded ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
          </header>
        </ListItem>

        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <List disablePadding className="categories-wrapper">
            {StorefilteredCategory.map((category, index) => (
              <ListItem key={category}>
                <ActiveLink
                  to={`${trim_lowerCase(category)}`}
                  onClick={() => handleClick(index)}
                >
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

export default SideNavCateogries;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  margin-top: 4em;

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
