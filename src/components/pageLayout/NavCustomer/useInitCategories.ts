import { useEffect } from "react";
import { StoreCategories, Gender } from "../../../assets/data/GlobalVariables";
import { useDispatch } from "../../../redux/Store/hooks";
import { initialCategories } from "../../../redux/features/Products/ProductsSlice";
import UniqueProductCategoryArray from "../../../utils/uniqueCategoriesArray";

const useInitCategories = () => {
  const dispatch = useDispatch();

  // ------------------------------------------------------
  // initial dispatch in-store categories to redux-store
  // ------------------------------------------------------
  const FilteredCategory = (category: StoreCategories, gender: Gender) => {
    const uniqueCategoriesArray = UniqueProductCategoryArray(category, gender);
    return uniqueCategoriesArray.map((product) => product.categories);
  };

  const menCategories = FilteredCategory("men", "Men");
  const womenCategories = FilteredCategory("women", "Women");
  const babyCategories = FilteredCategory("baby", "Baby");

  useEffect(() => {
    dispatch(
      initialCategories({
        storeCategory: "men",
        categories: menCategories,
      })
    );
    dispatch(
      initialCategories({
        storeCategory: "women",
        categories: womenCategories,
      })
    );
    dispatch(
      initialCategories({
        storeCategory: "baby",
        categories: babyCategories,
      })
    );
  }, []);
};

export default useInitCategories;
