import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Alert, Typography } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import styled from "@emotion/styled";
import ImageRendering from "../../../../components/shared/ImageRendering";
import { useSelector } from "../../../../redux/Store/hooks";
import styles from "../../../../styles";
import ModalItemInCart from "../../../../components/formik/ModalItemInCart";
import MuiButton from "../../../../components/shared/MuiButton";
import { ItemWithOrderID, promoCodes } from "../../../../assets/data/GlobalVariables";
import FormTextField from "../../../../components/formik/FormTextField";
import Link from "../../../../components/shared/Link/Link";

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// -------------------
// props type
// -------------------
interface Props {
  item: ItemWithOrderID;
  index: number;
}

// ------------------
// main component
// ------------------
const CartPage = () => {
  // // ------------------
  // // Hooks
  // // ------------------
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart);
  const [promoCodeValue, setPromoCodeValue] = useState(0);
  const subtotal = cartItems.reduce((prev, current) => prev + current.price, 0);

  // // ------------------
  // // Formik Values
  // // ------------------
  const handleValidation = (values: FormikValues) => {
    const errors: { code?: string } = {};
    if (!promoCodes.includes(values.code)) {
      errors.code = "Invalid code";
    }
    return errors;
  };

  const handleOnSubmit = () => {
    setPromoCodeValue(10);
  };

  // ------------------
  // one Item component
  // ------------------
  const Item: React.FC<Props> = ({ item, index }) =>
    item.mainPic && item.media ? (
      <ModalItemInCart item={item}>
        <ul key={index}>
          <li>
            <ImageRendering images={item.mainPic} multiple={false} width="230em" />
          </li>
          <li>
            <span>Name: </span> <span>{item.name}</span>
          </li>
          <li>
            <span>Colors: </span> <span>{item.colors}</span>
          </li>
          <li>
            <span>Sizes: </span> <span>{item.sizes}</span>
          </li>
          <li>
            <span>Amount: </span> <span>{item.amount}</span>
          </li>
          <li>
            <span>Price: </span> <span>{item.price} $ </span>
          </li>
        </ul>
      </ModalItemInCart>
    ) : cartItems[1] ? null : (
      <div className="empty-cart"> THE CART IS EMPTY </div>
    );

  return (
    <Holder>
      <div>
        <ul className="item-wrapper">
          {cartItems.map((item, index) => (
            <Item item={item} index={index} key={index} />
          ))}
        </ul>
      </div>

      {location.pathname === "/checkout" ? (
        <>
          <div className="vl-checkout" />

          <div className="order-wrapper">
            <Formik
              initialValues={{ code: "" }}
              validate={handleValidation}
              onSubmit={handleOnSubmit}
              validateOnBlur={false}
              validateOnChange={false}
            >
              <Form>
                {promoCodeValue === 0 ? (
                  <>
                    <Typography variant="h5" component={"header"} className="semi-bold">
                      Have a Promotional Code?
                    </Typography>

                    <div className="code-input">
                      <FormTextField
                        name="code"
                        size="small"
                        fullWidth={false}
                        label="Promo Code"
                        error={false}
                      />

                      <MuiButton color="secondary" type="submit">
                        DONE
                      </MuiButton>
                    </div>
                  </>
                ) : (
                  <Alert severity="success" variant="standard" className="valid-code">
                    Valid Promotional Code
                  </Alert>
                )}
              </Form>
            </Formik>

            <div className="summary-wrapper">
              <Typography
                variant="h5"
                component={"header"}
                className="semi-bold summary-header"
              >
                Order Summary
              </Typography>

              <div className="receipt">
                <Typography>Subtotal</Typography>
                <Typography>+ {subtotal} $</Typography>
              </div>

              <div className="receipt">
                <Typography>Promotional Code</Typography>
                <Typography>- {promoCodeValue} $ </Typography>
              </div>
              <div className="receipt">
                <Typography>Shipping</Typography>
                <Typography> FREE</Typography>
              </div>
              <hr />
              <div className="receipt">
                <Typography variant="h6" component={"p"} className="semi-bold">
                  ORDER TOTALS
                </Typography>
                <Typography variant="h6" component={"p"} className="semi-bold">
                  {subtotal - promoCodeValue} $
                </Typography>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="vl-cart" />

          <div className="order-wrapper">
            <div className="summary-wrapper">
              <div className="receipt">
                <Typography variant="h6" component={"p"} className="semi-bold">
                  ORDER TOTALS
                </Typography>

                <Typography variant="h6" component={"p"} className="semi-bold">
                  {subtotal} $
                </Typography>
              </div>

              <Link to="/checkout">
                <MuiButton color="success">GO TO CHECKOUT</MuiButton>
              </Link>
            </div>
          </div>
        </>
      )}
    </Holder>
  );
};

export default CartPage;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  display: grid;
  grid-template-columns: auto 1em 24em;
  
  .item-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    ul {
      border: 0.1px solid #000000;
      padding: 0.7em;
      ${fonts.bold}
      list-style: none;
      width: 16em;
      border-radius: 2em;
      cursor: pointer;
      li {
        color: ${colors.darkBlue};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: grid;
        grid-template-columns: 5em max-content;
        justify-items: center;
        img {
          object-fit: cover;
          height: 15em;
          width: 13em;
        }
        span:first-of-type {
          color: ${colors.lightBlue};
          ${fonts.semiBold}
        }
      }
      li:first-of-type {
        display: block;
        text-align: center;
        border-radius: 2em;
      }
    }
  }

  .vl-checkout {
    border-left: 1px solid ${colors.darkBlue};
    height: 18em;
    margin-top: 2.5em;
  }

  .vl-cart {
    border-left: 1px solid ${colors.darkBlue};
    height: 5em;
    margin-top: 3em;
  }

  .order-wrapper {
    margin: 2.5em 3em 2.5em 0;
    .code-input {
      margin-top: 0.5em;
    }
    .valid-code {
      ${fonts.medium}
    }

    .summary-wrapper {
      .summary-header {
        margin: 0.5em 0;
      }
      .receipt {
        margin: 0 1em 0.5em;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .semi-bold {
    ${fonts.semiBold}
  }

  .empty-cart {
    position: relative;
    top: 5em;
    margin: auto auto;
    text-align: center;
    font-size: 1.5em;
  }
`;
