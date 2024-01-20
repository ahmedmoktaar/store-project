import { Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import Link from "../../shared/Link/Link";
import { StoreCategories } from "../../../assets/data/GlobalVariables";
import { useSelector } from "../../../redux/Store/hooks";
import { useParams } from "react-router-dom";
import trim_lowerCase from "../../../utils/trim_lowerCase";

// --------------
// prop type
// --------------
interface Props {
  storeCategory: StoreCategories;
}

// ------------------
// main component
// ------------------
const Breadcrumbs: React.FC<Props> = ({ storeCategory }) => {
  const { category } = useParams();
  // ------------------------------------------------------------------
  //  in-store Products categories array for every storeCategory
  // ------------------------------------------------------------------
  const StoreCategoryProductsCategories = useSelector(
    (state) => state.storeProducts.productsCategories[storeCategory]
  );

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" className="breadcrumb">
      <Link underline="hover" color="inherit" to="/">
        Home
      </Link>

      <Link
        className="storeCategory"
        underline="hover"
        color="text.primary"
        to={`/${storeCategory}`}
      >
        {storeCategory}
      </Link>

      {StoreCategoryProductsCategories.map((oneCategory) => {
        return category && category === trim_lowerCase(oneCategory) ? (
          <Link
            underline="hover"
            color="text.primary"
            to={`/${storeCategory}/${category}`}
            aria-current="page"
            key={oneCategory}
          >
            {oneCategory}
          </Link>
        ) : null;
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
