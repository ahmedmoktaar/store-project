import styled from "@emotion/styled";
import { useSelector } from "../redux/Store/hooks";
import ImageRendering from "./shared/ImageRendering";
import styles from "../styles";
import { ProductValues, StoreCategories } from "../assets/data/GlobalVariables";

// ------------------
// props type
// ------------------
type CategoryType = {
  category: StoreCategories;
};

type ProductType = {
  product: ProductValues;
  index: number;
};

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// -------------------
// one product component
// -------------------
const Product: React.FC<ProductType> = ({ product, index }) => {
  return (
    <>
      {product.mainPic && product.media ? (
        <Holder key={index}>
          <li>
            <ImageRendering images={product.mainPic} multiple={false} width="auto" />
          </li>
          <li>
            <span>Name: </span> {product.name}
          </li>
          <li>
            <span>Brand: </span> {product.brand}
          </li>
          <li>
            <span>Colors: </span> {product.colors.join(" - ")}
          </li>
          <li>
            <span>Sizes: </span> {product.sizes.join(" - ")}
          </li>
          <li>
            <span>Gender: </span> {product.gender}
          </li>
          <li>
            <span>Categories: </span> {product.categories}
          </li>
          <li>
            <span>Price: </span> {product.price}
          </li>
          <li>
            <span>No. in Stock: </span> {product.amountInStock}
          </li>
          <li>
            <span>Delivery Time: </span> {product.deliveryTime}
          </li>
        </Holder>
      ) : null}
    </>
  );
};

// ------------------
// main component
// ------------------
const ProductStateSeller: React.FC<CategoryType> = ({ category }) => {
  // ------------------
  // active seller Products
  // ------------------
  const sellersDetails = useSelector((state) => state.sellersDetails);
  const SellersProducts = useSelector((state) => state.storeProducts.sellersProducts);

  const activeSeller = sellersDetails.findIndex((seller) => seller.isActive);
  const activeSellerProduct = SellersProducts[activeSeller].sellerProduct[category];

  return (
    <>
      {activeSellerProduct.map((product, index) => (
        <Product product={product} index={index} />
      ))}
    </>
  );
};

export default ProductStateSeller;

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
