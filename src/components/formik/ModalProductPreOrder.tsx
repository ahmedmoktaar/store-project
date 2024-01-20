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
  ProductChangeableValues,
  ProductValues,
  productChangeableInitialValues,
} from "../../assets/data/GlobalVariables";
import MuiButton from "../shared/MuiButton";
import ImageRendering from "../shared/ImageRendering";
import FormRadio from "./FormRadio";
import ImageModal from "../shared/ImageModal";
import styles from "../../styles";
import useReduxCustomer from "../../hooks/useReduxCustomer";
import useManageProduct from "../../hooks/useManageProduct";

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// ------------------
// props type
// ------------------
interface Props {
  product: ProductValues;
  children: React.ReactElement;
}

// ------------------
// main component
// ------------------
const ModalProductPreOrder: React.FC<Props> = ({ product, children }) => {
  // -------
  // hooks
  // -------
  const { amountInStockArray } = useReduxCustomer(product);
  const { addProduct } = useManageProduct(product);
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
  // Formik variables
  // --------------------------
  const initialValues = productChangeableInitialValues;

  const validationSchema = yup.object({
    colors: yup.string().required("Please Choose  One Color").min(1, "Please Choose  One Color"),
    sizes: yup.string().required("Please Choose  One Size").min(1, "Please Choose  One Size"),
    amount: yup.string(),
  });

  const [buttonClicked, setButtonClicked] = useState("");
  const onSubmit = (values: ProductChangeableValues) => {
    addProduct(values);
    if (buttonClicked === "buy-now") {
      navigateTo("/checkout");
    } else if (buttonClicked === "add-to-cart") {
      setOpen(false);
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
                <ImageModal multiple={false}>
                  <ImageRendering width="230em" multiple={false} images={product.mainPic ?? []} />
                </ImageModal>

                <ImageModal multiple>
                  <ImageRendering width="50em" multiple images={product.media ?? []} />
                </ImageModal>

                <DialogContentText className="description">{product.description}</DialogContentText>
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

                <DialogTitle className="semiBold">{product.name}</DialogTitle>

                <DialogContent className="content-wrapper">
                  <div>
                    <span>Price:</span>
                    <span className="semiBold"> {`${product.price} $`}</span>
                  </div>

                  <div>
                    <span>Colors: </span>
                    <FormRadio
                      name={"colors"}
                      options={product.colors}
                      deleteGridTemplateColumns
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          padding: "0.1em 0.4em",
                          width: "11em",
                        },
                      }}
                    />
                  </div>

                  <div>
                    <span>Sizes: </span>
                    <FormRadio
                      name={"sizes"}
                      options={product.sizes}
                      deleteGridTemplateColumns
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          padding: "0.1em 0.4em",
                          width: "11em",
                        },
                      }}
                    />
                  </div>

                  <div>
                    <span>In Stock: </span>
                    <span className="semiBold">{product.amountInStock} </span>
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
                          padding: "0.1em 0.4em",
                          width: "9em",
                        },
                      }}
                    />
                  </div>

                  <div>
                    <span>Delivery: </span>
                    <span className="semiBold">{product.deliveryTime}</span>
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
                    <MuiButton onClick={handleClose}>Continue Shopping</MuiButton>
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

export default ModalProductPreOrder;

// -------------------
// STYLED COMPONENT
// -------------------
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
  justify-content: space-between;
  grid-template-columns: 20em auto;
  margin: 0 1em;

  .close-button {
    position: relative;
    left: 0.68em;
    min-width: 1em;
    font-size: 1.5em;
    line-height: 1.5;
    border-radius: 0.1em;
    padding: 0 0.5em;
    margin: 0 0 0 auto;
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
      text-align: center;
      ${fonts.semiBold}
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
        margin: 0.5em;
        align-items: center;
      }
      span:first-of-type {
        color: ${colors.darkBlue};
      }
      .button-cart {
        margin: 0 0.5em;
        background-color: ${colors.darkOrange};
        color: ${colors.darkBlue};
      }
      .button-buy {
        background-color: ${colors.yellow};
        color: ${colors.darkBlue};
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
