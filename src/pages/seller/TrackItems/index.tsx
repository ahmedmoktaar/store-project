import styled from "@emotion/styled";
import ProductStateSeller from "../../../components/ProductStateSeller";

// ------------------
// main component
// ------------------
const TrackProducts: React.FC = () => {
  return (
    <Holder>
      <ProductStateSeller category="baby" />
      <ProductStateSeller category="men" />
      <ProductStateSeller category="women" />
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
