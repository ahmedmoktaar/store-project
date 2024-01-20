import { StoreCategories } from "../../../assets/data/GlobalVariables";
import { arrangeCategories } from "../../../redux/features/Products/ProductsSlice";
import { useDispatch, useSelector } from "../../../redux/Store/hooks";
import trim_lowerCase from "../../../utils/trim_lowerCase";
import Link from "../../shared/Link/Link";

// ---------
// props
// ---------
interface Props {
  storeCategory: StoreCategories;
  isOpen: Record<string, boolean>;
  setIsOpen: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}
const DropList: React.FC<Props> = ({ storeCategory, isOpen, setIsOpen }) => {
  // ----------------------------------------------------------------
  //  in-store Products categories array for every storeCategory
  // ----------------------------------------------------------------
  const storeCategoryProductsCategories = useSelector(
    (state) => state.storeProducts.productsCategories[storeCategory]
  );
  // ------------------------------
  // handle dropdown category list
  // ------------------------------
  const dispatch = useDispatch();

  const handleClick = (index: number, storeCategory: StoreCategories) => {
    dispatch(arrangeCategories({ index: index, storeCategory: storeCategory }));

    window.scrollTo({
      top: 0,
    });
  };

  const handleClose = (storeCategory: string) => {
    setIsOpen((prevOpenStates) => ({
      ...prevOpenStates,
      [storeCategory]: false,
    }));
  };

  // ------------------------------
  // category DropList
  // ------------------------------
  return (
    isOpen[storeCategory] && (
      <div className="categories-dropdown-list">
        {storeCategoryProductsCategories.map((category, index) => (
          <Link
            to={`/${storeCategory}/${trim_lowerCase(category)}`}
            onClick={() => {
              return handleClick(index, storeCategory), handleClose(storeCategory);
            }}
            key={category}
          >
            {category}
          </Link>
        ))}
      </div>
    )
  );
};
export default DropList;
