import { Outlet, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import styles from "../styles";
import ImageRendering from "./shared/ImageRendering";
import {
  Gender,
  storeCategories,
  trim_lowerCase,
} from "../assets/data/GlobalVariables";
import { useSelector } from "../redux/Store/hooks";
import Link from "./shared/Link/Link";
import { Typography } from "@mui/material";

// ------------------
// props type
// ------------------
interface Props {
  gender: Gender;
  store: storeCategories;
}

// -------------------
// style variables
// -------------------
const { colors } = styles;

// ------------------
// main component
// ------------------
const MenCategoriesPage: React.FC<Props> = ({ gender, store }) => {
  // ------------------
  // Hooks
  // ------------------
  const { category, product } = useParams();
  const menStore = useSelector((state) => state[store]);

  // ------------------
  // filtered Items in gender
  // ------------------
  const filteredItems = menStore.filter((item) => item.gender === gender);
  const itemsID = filteredItems.map((item) => item.id.toString());
  const correctPath = itemsID.includes(product ?? "");

  return (
    <Holder>
      {filteredItems.length > 0 && (
        <>
          {correctPath ? (
            <Outlet />
          ) : (
            filteredItems.map((item, index) => {
              return (
                category === trim_lowerCase(item.categories) && (
                  <li className="item-wrapper" key={index}>
                    <Link
                      to={`/men/${category}/${trim_lowerCase(
                        item.id.toString()
                      )}`}
                    >
                      <ImageRendering
                        images={item.mainPic ?? []}
                        multiple={false}
                        width="auto"
                      />
                    </Link>

                    <Link
                      to={`/men/${category}/${trim_lowerCase(
                        item.id.toString()
                      )}`}
                    >
                      <Typography variant="body1">{item.name}</Typography>
                      <Typography variant="h6">{`${item.price} $`}</Typography>
                    </Link>
                  </li>
                )
              );
            })
          )}
        </>
      )}
    </Holder>
  );
};

export default MenCategoriesPage;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  list-style: none;
  padding: 0;

  .item-wrapper {
    display: grid;
    text-align: center;
    a {
      text-decoration: none;
      color: ${colors.darkBlue};
      :hover {
        color: ${colors.darkOrange};
      }
    }

    img {
      height: 23rem;
      width: 15rem;
      object-fit: cover;
    }
  }
`;
