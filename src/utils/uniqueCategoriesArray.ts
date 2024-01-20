import { StoreCategories, Gender, ProductValues } from "../assets/data/GlobalVariables";
import { useSelector } from "../redux/Store/hooks";
import filterCategoriesByGender from "./filterCategoriesByGender";
import _ from "lodash";

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
  const categoryAvailableProducts = _.compact(
    filterCategoriesByGender(gender).map((category) =>
      storeCategoryProducts.find((product) => product.categories === category)
    )
  );
  

  return categoryAvailableProducts;
};

export default UniqueProductCategoryArray;
