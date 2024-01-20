import _ from "lodash";
import { Gender, clothesCategoriesList } from "../assets/data/GlobalVariables";

const filterCategoriesByGender = (gender: Gender) => {
  return _.compact(
    clothesCategoriesList.map((category) => (category.gender === gender ? category.label : null))
  );
};

export default filterCategoriesByGender;
