import {
  StoreCategories,
  Gender,
  ItemValues,
  categoriesByGender,
} from "../../assets/data/GlobalVariables";
import { useSelector } from "../../redux/Store/hooks";

// ------------------
// main component
// ------------------
const UniqueCategoriesArray = (
  storeCategory: StoreCategories,
  gender: Gender
): ItemValues[] => {
  const storeGenderItems = useSelector((state) => state[storeCategory].Products);

  // --------------------------------------------------
  // array of available items in a gender redux-store
  // --------------------------------------------------
  const genderAvailableItems = categoriesByGender(gender)
    .map(
      (category) =>
        storeGenderItems.find(
          (item) => item.gender === gender && item.categories === category
        ) || null
    )
    .filter((item): item is ItemValues => item !== null);

  // --------------------------------------------------
  // array of unique categories in a gender redux-store
  // --------------------------------------------------
  const isUniqueCategory: Record<string, boolean> = {};
  const uniqueCategories = genderAvailableItems.filter((item) => {
    if (categoriesByGender(gender).includes(item.categories)) {
      if (!isUniqueCategory[item.categories]) {
        isUniqueCategory[item.categories] = true;
        return true;
      }
    }
    return false;
  });

  return uniqueCategories;
};

export default UniqueCategoriesArray;
