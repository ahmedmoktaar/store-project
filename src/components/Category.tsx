import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import styles from "../styles";
import ImageRendering from "./shared/ImageRendering";
import {
  ProductValues,
  StoreCategories,
  trim_lowerCase,
} from "../assets/data/GlobalVariables";
import { useSelector } from "../redux/Store/hooks";
import ModalProductPreOrder from "./formik/ModalItemPreOrder";

// ------------------
// props type
// ------------------
interface Props {
  storeCategory: StoreCategories;
}

// -------------------
// style variables
// -------------------
const { fonts } = styles;

// ------------------
// main component
// ------------------
const Category: React.FC<Props> = ({ storeCategory }) => {
  // ------------------
  // Hooks
  // ------------------
  const { category } = useParams();

  // ------------------------------
  // storeCategory Products
  // ------------------------------
  const storeCategoryProducts = useSelector((state) => {
    const result: ProductValues[] = [];
    state.storeProducts.sellersProducts.map((sellerProducts) =>
      result.push(...sellerProducts.sellerProduct[storeCategory])
    );
    return result;
  });

  return (
    <Holder>
      <ul className="clothes-wrapper">
        {storeCategoryProducts.length > 0 && (
          <>
            {storeCategoryProducts.map((product, index) => {
              return (
                category === trim_lowerCase(product.categories) && (
                  <ModalProductPreOrder product={product} key={index}>
                    <ul className="product-wrapper">
                      <li>
                        <ImageRendering
                          images={product.mainPic ?? []}
                          multiple={false}
                          width="auto"
                        />
                      </li>

                      <li className="semibold">{product.name}</li>

                      <li> {product.price} $</li>
                    </ul>
                  </ModalProductPreOrder>
                )
              );
            })}
          </>
        )}
      </ul>
    </Holder>
  );
};

export default Category;

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

  .product-wrapper {
    display: grid;
    padding: 0.5em;
    border: 1px solid #000000;
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
