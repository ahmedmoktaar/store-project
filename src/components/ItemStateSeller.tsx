import styled from "@emotion/styled";
import { useSelector } from "../redux/Store/hooks";
import ImageRendering from "./shared/ImageRendering";

type Category = {
  category: "babyboy" | "babygirl" | "boy" | "girl" | "man" | "woman";
};

const ItemStatueSeller: React.FC<Category> = ({ category }) => {
  const items = useSelector((state) => state[category]);

  return (
    <Holder>
      {items.map((item) =>
        item.mainPic && item.media ? (
          <li>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.size}</span>
            <ImageRendering images={item.mainPic} multiple={false}/>
            <ImageRendering images={item.media} multiple={true}/>
            <span>{item.gender}</span>
            <span>{item.features}</span>
            <span>{item.discount}</span>
            <span>{item.description}</span>
            <span>{item.deliveryTime}</span>
            <span>{item.colors}</span>
            <span>{item.brand}</span>
            <span>{item.amountInStock}</span>
          </li>
        ) : null
      )}
    </Holder>
  );
};

export default ItemStatueSeller;

const Holder = styled.div`
  border: 2px solid #000000;
  .img-wrapper {
    width: 10em;
    img {
      width: inherit;
    }
  }
`;
