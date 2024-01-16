import { useNavigate } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import styled from "@emotion/styled";
import * as yup from "yup";
import { Form, Formik } from "formik";
import TextFormLabeled from "../../../components/formik/FormTextFieldLabeled";
import FormAutoComplete from "../../../components/formik/FormAutoComplete";
import FormSelect from "../../../components/formik/FormSelect";
import MuiButton from "../../../components/shared/MuiButton";
import FormUploadFiles from "../../../components/formik/FormUploadFiles";
import FormRadio from "../../../components/formik/FormRadio";
import {
  ProductValues,
  colorsList,
  sizeList,
  brandsList,
  productInitialValues,
  clothesCategoriesList,
  genderList,
  StoreCategories,
} from "../../../assets/data/GlobalVariables";
import { useDispatch, useSelector } from "../../../redux/Store/hooks";
import { addProduct } from "../../../redux/features/Products/ProductsSlice";

// ----------------
// main component
// ----------------
const AddProduct: React.FC = () => {
  // ----------------
  // hooks
  // ----------------
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  // ----------------
  // find active seller id
  // ----------------
  const activeSellerID = useSelector((state) => state.sellersDetails).find(
    (seller) => seller.isActive
  )?.id;

  // ----------------
  // formik variables
  // ----------------
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    brand: yup.string().required("Required"),
    price: yup.number().moreThan(0, "Invalid Price").required("Required"),
    colors: yup.array().min(1, "Required").required("Required"),
    sizes: yup.array().min(1, "Required").required("Required"),
    categories: yup.string().required("Required"),
    description: yup.string().required("Required"),
    gender: yup.string().required("Required"),
    mainPic: yup
      .array()
      .of(
        yup
          .mixed()
          .required("Required")
          .test("fileListType", "Invalid file list type", (value) => {
            return value instanceof FileList;
          })
          .test("fileType", "Invalid file type", (value) => {
            if (!(value instanceof FileList)) return false;
            const fileList = Array.from(value);
            return fileList.every((file) => {
              const fileName = file.name.toLowerCase();
              const fileExtension = fileName.split(".").pop();
              return (
                fileExtension !== undefined &&
                ["jpg", "jpeg", "png"].includes(fileExtension)
              );
            });
          })
      )
      .required("At least one file required"),
    media: yup
      .array()
      .of(
        yup
          .mixed()
          .required("Required")
          .test("fileListType", "Invalid file list type", (value) => {
            return value instanceof FileList;
          })
          .test("fileType", "Invalid file type", (value) => {
            if (!(value instanceof FileList)) return false;
            const fileList = Array.from(value);
            return fileList.every((file) => {
              const fileName = file.name.toLowerCase();
              const fileExtension = fileName.split(".").pop();
              return (
                fileExtension !== undefined &&
                ["jpg", "jpeg", "png"].includes(fileExtension)
              );
            });
          })
      )
      .required("At least one file required"),
    amountInStock: yup
      .number()
      .moreThan(0, "Invalid Number")
      .required("Required"),
    deliveryTime: yup.string().required("Required"),
  });

  const onSubmit = (values: ProductValues) => {
    const category = values.gender.toLowerCase() as StoreCategories;
    dispatch(
      addProduct({
        product: values,
        storeCategory: category,
        sellerID: activeSellerID,
      })
    );

    navigateTo("/trackproducts");
  };

  return (
    <Holder>
      <Formik
        initialValues={productInitialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-wrapper">
          <TextFormLabeled name="name" label="Product Name" />
          <FormRadio name="brand" label="Brand Name: " options={brandsList} />
          <TextFormLabeled
            type="number"
            name="price"
            label="Price"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />

          <FormSelect name="colors" label="Colors Available" options={colorsList} />

          <FormSelect name="sizes" label="Sizes Available" options={sizeList} />

          <FormAutoComplete
            name="categories"
            label="Categories"
            options={clothesCategoriesList}
          />

          <TextFormLabeled multiline name="description" label="Description" />

          <FormRadio name="gender" label="Gender: " options={genderList} />

          <TextFormLabeled name="amountInStock" label="Amount In Stock" type="number" />

          <TextFormLabeled name="deliveryTime" label="Delivery Time" />

          <FormUploadFiles name="mainPic" label="Main Picture" multiple={false} />

          <FormUploadFiles name="media" label="Pictures" multiple />

          <div className="buttons">
            <MuiButton type="reset" color="error">
              Reset
            </MuiButton>
            <MuiButton type="submit" color="success">
              Submit
            </MuiButton>
          </div>
        </Form>
      </Formik>
    </Holder>
  );
};

export default AddProduct;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    margin: 4em;
    align-items: center;
    justify-items: center;
    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
`;
