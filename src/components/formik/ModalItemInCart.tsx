import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import styled from "@emotion/styled";
import {
  ItemChangeableValues,
  ItemWithOrderID,
  itemChangeableInitialValues,
  itemInitialValues,
} from "../../assets/data/GlobalVariables";
import MuiButton from "../shared/MuiButton";
import ImageRendering from "../shared/ImageRendering";
import FormRadio from "./FormRadio";
import ImageModal from "../shared/ImageModal";
import styles from "../../styles";
import { useDispatch, useSelector } from "../../redux/Store/hooks";
import { addItemToCart, removeItemFromCart } from "../../redux/features/Cart/CartSlice";

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// ------------------
// props type
// ------------------
interface Props {
  item: ItemWithOrderID;
  children: React.ReactElement;
}

// ------------------
// main component
// ------------------
const ModalItemInCart: React.FC<Props> = ({ item, children }) => {
  // -------
  // hooks
  // -------
  const dispatch = useDispatch();
  const womenItems = useSelector((state) => state.women.Products);
  const menItems = useSelector((state) => state.men.Products);
  const babyItems = useSelector((state) => state.baby.Products);
  const originalItem =
    babyItems.find((OneItem) => OneItem.id === item.id) ??
    menItems.find((OneItem) => OneItem.id === item.id) ??
    womenItems.find((OneItem) => OneItem.id === item.id) ??
    itemInitialValues;

  // --------------------------
  // handel Modal open & close
  // --------------------------
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // --------------------------
  // handel item remove
  // --------------------------
  const handleRemove = () => {
    dispatch(removeItemFromCart(item.orderID));
    handleClose();
  };

  // --------------------------
  // array to choose order quantity
  // --------------------------
  const amountInStockArray = originalItem
    ? Array.from({ length: originalItem.amountInStock }, (_, index) =>
        (index + 1).toString()
      )
    : [""];

  // --------------------------
  // Formik variables
  // --------------------------
  const initialValues = itemChangeableInitialValues;

  const validationSchema = yup.object({
    colors: yup
      .string()
      .required("Please Choose Minimum One Color")
      .min(1, "Please Choose Minimum One Color"),
    sizes: yup
      .string()
      .required("Please Choose Minimum One Size")
      .min(1, "Please Choose Minimum One Size"),
    amount: yup.string(),
  });

  const onSubmit = (values: ItemChangeableValues) => {
    dispatch(removeItemFromCart(item.orderID));
    dispatch(addItemToCart({ ...originalItem, ...values }));
    handleClose();
  };

  return (
    <Holder>
      <MuiButton
        variant="contained"
        color="warning"
        onClick={handleRemove}
        className="remove-button"
      >
        &times;
      </MuiButton>

      <a onClick={handleClickOpen}>{children}</a>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <ModalWrapper>
              <div className="left-side-wrapper">
                <ImageModal multiple={false}>
                  <ImageRendering
                    width="230em"
                    multiple={false}
                    images={originalItem.mainPic ?? []}
                  />
                </ImageModal>

                <ImageModal multiple>
                  <ImageRendering
                    width="50em"
                    multiple
                    images={originalItem.media ?? []}
                  />
                </ImageModal>

                <DialogContentText className="description">
                  {originalItem.description}
                </DialogContentText>
              </div>

              <div className="right-side-wrapper">
                <MuiButton
                  variant="contained"
                  color="warning"
                  onClick={handleClose}
                  className="close-button"
                >
                  &times;
                </MuiButton>
                <DialogTitle className="semiBold">{originalItem.name}</DialogTitle>

                <DialogContent className="content-wrapper">
                  <div>
                    <span>Price:</span>
                    <span className="semiBold"> {`${originalItem.price} $`}</span>
                  </div>

                  <div>
                    <span>Colors: </span>
                    <FormRadio
                      name={"colors"}
                      options={originalItem.colors}
                      placeholder="Colors"
                      deleteGridTemplateColumns
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          padding: "0.1em 0.4em",
                          width: "9em",
                        },
                      }}
                    />
                  </div>

                  <div>
                    <span>Sizes: </span>
                    <FormRadio
                      name={"sizes"}
                      options={originalItem.sizes}
                      placeholder="Size"
                      deleteGridTemplateColumns
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          padding: "0.1em 0.4em",
                          width: "9em",
                        },
                      }}
                    />
                  </div>
                  <div>
                    <span>In Stock: </span>
                    <span className="semiBold">{originalItem.amountInStock} </span>
                  </div>

                  <div>
                    <span>Quantity: </span>
                    <FormRadio
                      name="amount"
                      options={amountInStockArray}
                      placeholder="Number"
                      deleteGridTemplateColumns
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          padding: "0.3em",
                          width: "9em",
                        },
                      }}
                    />
                  </div>

                  <div>
                    <span>Delivery: </span>
                    <span className="semiBold">{item.deliveryTime}</span>
                  </div>

                  <DialogActions className="dialog-actions">
                    <MuiButton className="button-edit" type="submit">
                      CONFIRM EDIT
                    </MuiButton>
                  </DialogActions>
                </DialogContent>
              </div>
            </ModalWrapper>
          </Form>
        </Formik>
      </Dialog>
    </Holder>
  );
};

export default ModalItemInCart;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  a {
    :hover {
      opacity: 0.9;
    }
  }

  .remove-button {
    position: relative;
    left: 9.8em;
    top: 1em;
    min-width: 1.8em;
    font-size: 1.4em;
    margin: 0 0 0 auto;
    padding: 0;
    border-radius: 50%;
    z-index: 10;
    ${fonts.bold}
  }
`;

const ModalWrapper = styled.div`
  display: grid;
  grid-template-columns: 20em auto;
  justify-content: space-between;
  .close-button {
    min-width: 1.8em;
    font-size: 1.4em;
    margin: 0 0 0 auto;
    padding: 0;
    border-radius: 9%;
    ${fonts.bold}
  }

  a {
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }

  .left-side-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0 1em 1em;
    .description {
      margin: 1em 0;
      ${fonts.semiBold}
      text-align: center;
    }
  }

  .right-side-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .content-wrapper {
      & > div {
        display: grid;
        grid-template-columns: 5em max-content;
        margin: 1em;
        align-items: center;
      }
      span:first-of-type {
        color: ${colors.darkBlue};
      }
      .button-edit {
        background-color: ${colors.green};
        color: ${colors.white};
      }
    }

    .semiBold {
      ${fonts.semiBold}
    }

    .dialog-actions {
      justify-content: center;
      justify-items: center;
      button {
        width: max-content;
      }
    }
  }
`;
