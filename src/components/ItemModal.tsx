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
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
  ItemChangeableValues,
  ItemValues,
  itemChangeableInitialValues,
} from "../assets/data/GlobalVariables";
import FormToggleButton from "./formik/FormToggleButton";
import MuiButton from "./shared/MuiButton";
import ImageRendering from "./shared/ImageRendering";
import FormRadio from "./formik/FormRadio";
import ImageModal from "./shared/ImageModal";
import styles from "../styles";
import { useDispatch } from "../redux/Store/hooks";
import { addItemToCart } from "../redux/features/Cart/CartSlice";

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// ------------------
// props type
// ------------------
interface Props {
  item: ItemValues;
  children: React.ReactElement;
}

// ------------------
// main component
// ------------------
const ItemModal: React.FC<Props> = ({ item, children }) => {
  // -------
  // hooks
  // -------
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

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
  // array to choose order quantity
  // --------------------------
  const amountInStockArray = Array.from(
    { length: item.amountInStock },
    (_, index) => (index + 1).toString()
  );

  // --------------------------
  // Formik variables
  // --------------------------
  const initialValues = itemChangeableInitialValues;

  const validationSchema = yup.object({
    colors: yup
      .array()
      .required("Please Choose Minimum One Color")
      .min(1, "Please Choose Minimum One Color"),
    sizes: yup
      .array()
      .required("Please Choose Minimum One Size")
      .min(1, "Please Choose Minimum One Size"),
    amount: yup.string(),
  });

  const [buttonClicked, setButtonClicked] = useState("");
  const onSubmit = (values: ItemChangeableValues) => {
    if (buttonClicked === "buy-now") {
      dispatch(addItemToCart({ ...item, ...values }));
      navigateTo("/cart");
    } else if (buttonClicked === "add-to-cart") {
      dispatch(addItemToCart({ ...item, ...values }));
    } else {
      null;
    }
  };

  return (
    <Holder>
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
                <MuiButton
                  variant="text"
                  onClick={handleClose}
                  className="close-button"
                >
                  X
                </MuiButton>

                <ImageModal multiple={false}>
                  <ImageRendering
                    width="230em"
                    multiple={false}
                    images={item.mainPic ?? []}
                  />
                </ImageModal>

                <ImageModal multiple>
                  <ImageRendering
                    width="50em"
                    multiple
                    images={item.media ?? []}
                  />
                </ImageModal>

                <DialogContentText className="description">
                  {item.description}
                </DialogContentText>
              </div>

              <div className="right-side-wrapper">
                <DialogTitle className="semiBold">{item.name}</DialogTitle>

                <DialogContent className="content-wrapper">
                  <div>
                    <span>Price:</span>
                    <span className="semiBold"> {`${item.price} $`}</span>
                  </div>

                  <div>
                    <span>Colors: </span>
                    <FormToggleButton name={"colors"} list={item.colors} />
                  </div>

                  <div>
                    <span>Sizes: </span>
                    <FormToggleButton name={"sizes"} list={item.sizes} />
                  </div>

                  <div>
                    <span>In Stock: </span>
                    <span className="semiBold">{item.amountInStock} </span>
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

                  <MuiButton
                    className="button-cart"
                    onClick={() => setButtonClicked("add-to-cart")}
                    type="submit"
                  >
                    Add to Cart
                  </MuiButton>
                  
                  <MuiButton
                    className="button-buy"
                    onClick={() => setButtonClicked("buy-now")}
                    type="submit"
                  >
                    BUY NOW
                  </MuiButton>

                  <DialogActions className="dialog-actions">
                    <MuiButton onClick={handleClose}>
                      Continue Shopping
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

export default ItemModal;

const Holder = styled.div`
  a {
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
  }
`;

const ModalWrapper = styled.div`
  display: grid;
  grid-template-columns: 20em auto;
  margin: 0 1em;
  justify-content: space-between;
  .close-button {
    position: relative;
    right: 11.5em;
    bottom: 0;
    color: ${colors.darkBlue};
    border-color: ${colors.darkBlue};
  }
  a {
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
  }
  .left-side-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
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
        margin-bottom: 1em;
        align-items: center;
        div {
          display: block;
        }
      }
      span:first-of-type {
        color: ${colors.darkBlue};
      }
      .button-cart {
        background-color: ${colors.darkOrange};
        color: ${colors.darkBlue};
        margin: 0 1em 1em 2em;
      }
      .button-buy {
        background-color: ${colors.yellow};
        color: ${colors.darkBlue};
        margin-bottom: 1em;
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
