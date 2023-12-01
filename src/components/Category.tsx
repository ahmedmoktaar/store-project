import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import styles from "../styles";
import ImageRendering from "./shared/ImageRendering";
import {
  Gender,
  storeCategories,
  trim_lowerCase,
} from "../assets/data/GlobalVariables";
import { useSelector } from "../redux/Store/hooks";
import ItemModal from "./ItemModal";

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
const { fonts } = styles;

// ------------------
// main component
// ------------------
const MenCategoriesPage: React.FC<Props> = ({ gender, store }) => {
  // ------------------
  // Hooks
  // ------------------
  const { category } = useParams();
  const menStore = useSelector((state) => state[store]);

  // ------------------
  // filtered Items in gender
  // ------------------
  const filteredItems = menStore.filter((item) => item.gender === gender);

  return (
    <Holder>
      <ul className="clothes-wrapper">
        {filteredItems.length > 0 && (
          <>
            {filteredItems.map((item, index) => {
              return (
                category === trim_lowerCase(item.categories) && (
                    <ItemModal item={item} key={index}>
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
                    </ItemModal>
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
