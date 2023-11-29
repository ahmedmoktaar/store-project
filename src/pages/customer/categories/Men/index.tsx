import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Outlet, useParams } from "react-router-dom";
import ImageRendering from "../../../../components/shared/ImageRendering";
import styles from "../../../../styles";
import {
  categoriesByGender,
  trim_lowerCase,
} from "../../../../assets/data/GlobalVariables";
import SideNavCategories from "../../../../components/pageLayout/SideNavCategories";
import UniqueCategoriesArray from "../../../../components/shared/UniqueCategoriesArray";

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// ------------------
// main component
// ------------------
const MenCategoriesPage = () => {
  // ---------------------------------------------
  // check if the user at available category page
  // ---------------------------------------------
  const { category } = useParams();
  const lowerCaseCategoriesByGender = categoriesByGender("Male").map(
    (category) => trim_lowerCase(category)
  );
  const correctPath = lowerCaseCategoriesByGender.includes(category ?? "");

  // --------------------------------------------------
  // array of unique categories in a gender redux-store
  // --------------------------------------------------
  const filteredCategories = UniqueCategoriesArray("men", "Male");

  return (
    <Holder>
      <SideNavCategories storeCategory="men" gender="Male" />

      <div className="body-wrapper">
        <Typography variant="h5" className="semibold header-text">
          {"Men Clothing"}
        </Typography>

        {!correctPath ? (
          <ul className="clothes-wrapper">
            {filteredCategories.length && (
              <>
                {filteredCategories.map((category) => {
                  return (
                    <ul className="category-wrapper" key={category.categories}>
                      <li>
                        <ImageRendering
                          images={category.mainPic ?? []}
                          multiple={false}
                          width="auto"
                        />
                      </li>
                      <li className="semibold">{category.categories}</li>
                    </ul>
                  );
                })}
              </>
            )}
          </ul>
        ) : (
          <Outlet />
        )}
      </div>
    </Holder>
  );
};

export default MenCategoriesPage;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  display: grid;
  grid-template-columns: 17em auto;
  word-wrap: normal;
  margin: 1em 2em 5em 0.5em;

  ul {
    list-style: none;
    padding: 0;
  }

  .body-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 0.5em;
  }

  .semibold {
    ${fonts.semiBold}
  }

  .header-text {
    color: ${colors.darkBlue};
    width: fit-content;
    padding: 0.3em;
    margin-bottom: 0.5em;
    align-self: center;
  }

  .clothes-wrapper {
    display: flex;
    flex-wrap: wrap;
    text-align-last: center;
    gap: 1em;
    .category-wrapper {
      display: grid;
      img {
        height: 23rem;
        width: 15rem;
        object-fit: cover;
      }
    }
  }
`;
