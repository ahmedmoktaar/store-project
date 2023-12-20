import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import styles from "../styles";
import ImageRendering from "./shared/ImageRendering";
import {
  Gender,
  StoreCategories,
  trim_lowerCase,
} from "../assets/data/GlobalVariables";
import { useSelector } from "../redux/Store/hooks";
import ModalItemPreOrder from "./formik/ModalItemPreOrder";

// ------------------
// props type
// ------------------
interface Props {
  gender: Gender;
  storeCategory: StoreCategories;
}

// -------------------
// style variables
// -------------------
const { fonts } = styles;

// ------------------
// main component
// ------------------
const MenCategoriesPage: React.FC<Props> = ({ gender, storeCategory }) => {
  // ------------------
  // Hooks
  // ------------------
  const { category } = useParams();
  const storeGenderItems = useSelector(
    (state) => state[storeCategory].Products
  );

  // ------------------
  // filter Items in gender
  // ------------------
  const filteredItems = storeGenderItems.filter(
    (item) => item.gender === gender
  );

  return (
    <Holder>
      <ul className="clothes-wrapper">
        {filteredItems.length > 0 && (
          <>
            {filteredItems.map((item, index) => {
              return (
                category === trim_lowerCase(item.categories) && (
                  <ModalItemPreOrder item={item} key={index}>
                    <ul className="item-wrapper">
                      <li>
                        <ImageRendering
                          images={item.mainPic ?? []}
                          multiple={false}
                          width="auto"
                        />
                      </li>

                      <li className="semibold">{item.name}</li>

                      <li> {item.price} $</li>
                    </ul>
                  </ModalItemPreOrder>
                )
              );
            })}
          </>
        )}
      </ul>
    </Holder>
  );
};

export default MenCategoriesPage;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align-last: center;
  gap: 1.5em;

  ul {
    list-style: none;
    padding: 0;
  }

  .item-wrapper {
    display: grid;
    padding: 0.5em;
    border: 2px solid #000000;
    img {
      height: 23rem;
      width: 15rem;
      object-fit: cover;
    }
  }

  .semibold {
    ${fonts.semiBold}
  }

  .small {
    font-size: 0.9em;
  }
`;
