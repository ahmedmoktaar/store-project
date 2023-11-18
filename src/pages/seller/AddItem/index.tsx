import { useNavigate } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import styled from "@emotion/styled";
import * as yup from "yup";
import { Form, Formik } from "formik";
import TextFormLabeled from "../../../components/formik/FormTextFieldLabeled";
import FormAutoComplete from "../../../components/formik/FormAutoComplete";
import colorsList from "../../../assets/data/colorsList";
import brandsList from "../../../assets/data/brandsList";
import FormSelect from "../../../components/formik/FormSelect";
import sizeList from "../../../assets/data/sizeList";
import genderList from "../../../assets/data/genderList";
import MuiButton from "../../../components/shared/MuiButton";
import FormUploadFiles from "../../../components/formik/FormUploadFiles";
import FormRadio from "../../../components/formik/FormRadio";
import {
  ItemValues,
  itemInitialValues,
} from "../../../assets/data/GlobalVariables";
import { useDispatch } from "../../../redux/Store/hooks";
import { babyBoyAdd } from "../../../redux/features/ItemDetails/BabyBoySlice";
import { babyGirlAdd } from "../../../redux/features/ItemDetails/BabyGirlSlice";
import { boyAdd } from "../../../redux/features/ItemDetails/BoySlice";
import { girlAdd } from "../../../redux/features/ItemDetails/GirlSlice";
import { manAdd } from "../../../redux/features/ItemDetails/ManSlice";
import { womanAdd } from "../../../redux/features/ItemDetails/WomanSlice";

// ----------------
// main component
// ----------------
const AddItem: React.FC = () => {
  // ----------------
  // hooks
  // ----------------
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  // ----------------
  // formik variables
  // ----------------
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    brand: yup.string().required("Required"),
    price: yup.string().required("Required"),
    colors: yup.string().required("Required"),
    size: yup.string().required("Required"),
    features: yup.string().required("Required"),
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
    amountInStock: yup.string().required("Required"),
    deliveryTime: yup.string().required("Required"),
  });

  const onSubmit = (values: ItemValues) => {
    switch (values.gender) {
      case "Baby Boy":
        dispatch(babyBoyAdd(values));
        break;
      case "Baby Girl":
        dispatch(babyGirlAdd(values));
        break;
      case "Boy":
        dispatch(boyAdd(values));
        break;
      case "Girl":
        dispatch(girlAdd(values));
        break;
      case "Man":
        dispatch(manAdd(values));
        break;
      case "Woman":
        dispatch(womanAdd(values));
        break;

      default:
        null;
    }
    navigateTo("/trackitems");
  };

  return (
    <Holder>
      <Formik
        initialValues={itemInitialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-wrapper">
          <TextFormLabeled name="name" label="Product Name" />
          <FormAutoComplete
            name="brand"
            label="Brand Name"
            options={brandsList}
          />
          <TextFormLabeled
            type="number"
            name="price"
            label="Price"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <FormSelect
            name="colors"
            label="Colors Available"
            options={colorsList}
          />
          <FormSelect name="size" label="Sizes Available" options={sizeList} />
          <TextFormLabeled multiline name="features" label="Features" />
          <TextFormLabeled multiline name="description" label="Description" />
          <FormRadio name="gender" label="Gender" options={genderList} />
          <TextFormLabeled
            name="amountInStock"
            label="Amount In Stock"
            type="number"
          />
          <TextFormLabeled name="deliveryTime" label="Delivery Time" />
          <FormUploadFiles name="mainPic" label="Pictures" multiple={false} />
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

export default AddItem;

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
