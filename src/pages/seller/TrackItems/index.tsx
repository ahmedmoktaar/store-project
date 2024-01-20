import styled from "@emotion/styled";
import { StoreCategories } from "../../../assets/data/GlobalVariables";
import useReduxSeller from "../../../hooks/useReduxSeller";
import ProductState from "./productState";

// ------------------
// Category type
// ------------------
type StoreCategoryType = {
  category: StoreCategories;
};

// ------------------
// main component
// ------------------
const TrackProducts: React.FC = () => {
  const { activeSellerProducts } = useReduxSeller();

  // ------------------
  // Category Products
  // ------------------
  const CategoryProducts: React.FC<StoreCategoryType> = ({ category }) => {
    return (
      <>
        {activeSellerProducts[category].map((product, index) => (
          <ProductState product={product} index={index} key={index} />
        ))}
      </>
    );
  };

  return (
    <Holder>
      <CategoryProducts category="baby" />
      <CategoryProducts category="men" />
      <CategoryProducts category="women" />
    </Holder>
  );
};

export default TrackProducts;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2.5em;
  gap: 1em;
`;
