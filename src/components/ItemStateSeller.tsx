import styled from "@emotion/styled";
import { useSelector } from "../redux/Store/hooks";
import ImageRendering from "./shared/ImageRendering";
import styles from "../styles";
import { StoreCategories } from "../assets/data/GlobalVariables";

// ------------------
// props type
// ------------------
type Category = {
  category: StoreCategories;
};

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// ------------------
// main component
// ------------------
const ItemStatueSeller: React.FC<Category> = ({ category }) => {
  const items = useSelector((state) => state[category].Products);

  return (
    <>
      {items.map((item, index) =>
        item.mainPic && item.media ? (
          <Holder key={index}>
            <li>
              <ImageRendering
                key={index}
                images={item.mainPic}
                multiple={false}
                width="120em"
              />
            </li>
            <li>
              <span>Name: </span> {item.name}
            </li>
            <li>
              <span>Brand: </span> {item.brand}
            </li>
            <li>
              <span>Colors: </span> {item.colors.join(" - ")}
            </li>
            <li>
              <span>Sizes: </span> {item.sizes.join(" - ")}
            </li>
            <li>
              <span>Gender: </span> {item.gender}
            </li>
            <li>
              <span>Categories: </span> {item.categories}
            </li>
            <li>
              <span>Price: </span> {item.price}
            </li>
            <li>
              <span>No. in Stock: </span> {item.amountInStock}
            </li>
            <li>
              <span>Delivery Time: </span> {item.deliveryTime}
            </li>
          </Holder>
        ) : null
      )}
    </>
  );
};

export default ItemStatueSeller;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.ul`
  border: 2px solid #000000;
  list-style: none;
  padding: 0.5em;
  ${fonts.bold}
  li {
    color: ${colors.darkBlue};
  }
  span {
    color: ${colors.lightBlue};
    ${fonts.semiBold}
  }
`;
