import styled from "@emotion/styled";
import styles from "../styles";
import ImageRendering from "./shared/ImageRendering";
import { Gender, storeCategories } from "../assets/data/GlobalVariables";
import { useSelector } from "../redux/Store/hooks";

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
const { fonts, colors } = styles;
// ------------------
// main component
// ------------------
const MenCategoriesPage: React.FC<Props> = ({ gender, store }) => {
  // ------------------
  // Redux-store
  // ------------------
  const menStore = useSelector((state) => state[store]);
  const availableCategories = useSelector((state) => state.availableCategories);
  
  // ------------------
  // filtered Items in gender
  // ------------------
  const filteredItems = menStore.filter(
    (category) => category.gender === gender
  );

  return (
    <Holder>
      <ul className="clothes-wrapper">
        {filteredItems.length > 0 && (
          <>
            {filteredItems.map((category, index) => {
              return (
                category.categories === availableCategories[0] && (
                  <ul className="category-wrapper" key={index}>
                    <li className="semibold">{category.categories}</li>
                    <li>
                      <ImageRendering
                        images={category.mainPic ?? []}
                        multiple={false}
                        width="auto"
                      />
                    </li>
                    <li className="semibold">{category.gender}</li>
                    <li className="semibold">{category.amountInStock}</li>
                    <li className="semibold">{category.brand}</li>
                    <li className="semibold">{category.colors}</li>
                    <li className="semibold">{category.deliveryTime}</li>
                    <li className="semibold">{category.name}</li>
                    <li className="semibold">{category.price}</li>
                    <li className="semibold">{category.sizes}</li>
                  </ul>
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

  .category-wrapper {
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

  .header-text {
    color: ${colors.darkBlue};
    width: fit-content;
    padding: 0.3em;
    margin-bottom: 1em;
    align-self: center;
  }
`;
