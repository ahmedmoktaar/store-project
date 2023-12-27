import {
  StoreCategories,
  Gender,
  ProductValues,
  filterCategoriesByGender,
} from "../../assets/data/GlobalVariables";
import { useSelector } from "../../redux/Store/hooks";

// ------------------
// main component
// ------------------
const UniqueProductCategoryArray = (
  storeCategory: StoreCategories,
  gender: Gender
): ProductValues[] => {
  const sellersProducts = useSelector((state) => state.storeProducts.sellersProducts);
  // --------------------------------------------------
  // array of available products in a gender redux-store
  // --------------------------------------------------
  const storeCategoryProducts = sellersProducts
    .map((sellerProduct) => sellerProduct.sellerProduct[storeCategory])
    .flat();

  // --------------------------------------------------
  // array of one product for each category in a gender redux-store
  // --------------------------------------------------
  const categoryAvailableProducts = filterCategoriesByGender(gender)
    .map(
      (category) =>
        storeCategoryProducts.find((product) => product.categories === category) || null
    )
    .filter((product): product is ProductValues => product !== null);

  return categoryAvailableProducts;
};

export default UniqueProductCategoryArray;
