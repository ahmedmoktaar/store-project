import {
  storeCategories,
  Gender,
  ItemValues,
  categoriesByGender,
} from "../../assets/data/GlobalVariables";
import { useSelector } from "../../redux/Store/hooks";

// ------------------
// main component
// ------------------
const UniqueCategoriesArray = (
  storeCategory: storeCategories,
  gender: Gender
): ItemValues[] => {
  const storeGender = useSelector((state) => state[storeCategory]);

  // --------------------------------------------------
  // array of available items in a gender redux-store
  // --------------------------------------------------
  const filterCategories = categoriesByGender(gender)
    .map(
      (category) =>
        storeGender.find(
          (item) => item.gender === gender && item.categories === category
        ) || null
    )
    .filter((item): item is ItemValues => item !== null);

  // --------------------------------------------------
  // array of unique categories in a gender redux-store
  // --------------------------------------------------
  const isUniqueCategory: Record<string, boolean> = {};
  const uniqueCategories = filterCategories.filter((obj) => {
    if (categoriesByGender(gender).includes(obj.categories)) {
      if (!isUniqueCategory[obj.categories]) {
        isUniqueCategory[obj.categories] = true;
        return true;
      }
    }
    return false;
  });

  return uniqueCategories;
};

export default UniqueCategoriesArray;
