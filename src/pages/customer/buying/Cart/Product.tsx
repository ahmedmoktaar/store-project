import ImageRendering from "../../../../components/shared/ImageRendering";
import ModalProductInCart from "../../../../components/formik/ModalProductInCart";
import { ProductInCartType } from "../../../../assets/data/GlobalVariables";

// -------------------
// Product type
// -------------------
interface Props {
  product: ProductInCartType;
  index: number;
}

// ------------------
// main component
// ------------------
const Product: React.FC<Props> = ({ product, index }) =>
  product.mainPic && product.media ? (
    <ModalProductInCart product={product}>
      <ul key={index}>
        <li>
          <ImageRendering images={product.mainPic} multiple={false} width="230em" />
        </li>
        <li>
          <span>Name: </span> <span>{product.name}</span>
        </li>
        <li>
          <span>Colors: </span> <span>{product.colors}</span>
        </li>
        <li>
          <span>Sizes: </span> <span>{product.sizes}</span>
        </li>
        <li>
          <span>Amount: </span> <span>{product.amount}</span>
        </li>
        <li>
          <span>Price: </span> <span>{product.price} $ </span>
        </li>
      </ul>
    </ModalProductInCart>
  ) : null;

export default Product;
