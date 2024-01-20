import { Gender, clothesCategoriesList } from "../assets/data/GlobalVariables";

const filterCategoriesByGender = (gender: Gender) => {
    return clothesCategoriesList
      .map((category) => (category.gender === gender ? category.label : null))
      .filter((element): element is string => element !== null);
  };

export default filterCategoriesByGender;
