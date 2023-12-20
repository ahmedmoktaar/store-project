import styled from "@emotion/styled";
import { useSelector } from "../redux/Store/hooks";
import ImageRendering from "./shared/ImageRendering";
import styles from "../styles";
import { ItemValues, StoreCategories } from "../assets/data/GlobalVariables";

// ------------------
// props type
// ------------------
type CategoryType = {
  category: StoreCategories;
};

type ItemType = {
  item: ItemValues;
  index: number;
};

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// -------------------
// helper function
// -------------------
const Item: React.FC<ItemType> = ({ item, index }) => {
  return (
    <>
      {item.mainPic && item.media ? (
        <Holder key={index}>
          <li>
            <ImageRendering images={item.mainPic} multiple={false} width="auto" />
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
      ) : null}
    </>
  );
};

// ------------------
// main component
// ------------------
const ItemStateSeller: React.FC<CategoryType> = ({ category }) => {
  const items = useSelector((state) => state[category].Products);

  return (
    <>
      {items.map((item, index) => (
        <Item item={item} index={index} />
      ))}
    </>
  );
};

export default ItemStateSeller;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.ul`
  border: 2px solid #000000;
  list-style: none;
  padding: 0.5em;
  font-size: 0.9em;
  width: 13.5em;
  ${fonts.bold}

  li {
    color: ${colors.darkBlue};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    :hover {
      white-space: normal;
    }
  }

  li:first-of-type {
    text-align: center;
  }

  span {
    color: ${colors.lightBlue};
    ${fonts.semiBold}
  }

  img {
    height: 10rem;
    width: 8rem;
    object-fit: cover;
  }
`;
