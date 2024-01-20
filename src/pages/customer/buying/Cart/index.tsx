import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import styles from "../../../../styles";
import useReduxCustomer from "../../../../hooks/useReduxCustomer";
import Product from "./Product";
import { EmptyCart } from "./EmptyCart";
import CheckoutCart from "./CheckoutCart";
import PreCheckoutCart from "./PreCheckoutCart";

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// ------------------
// main component
// ------------------
const CartPage = () => {
  // ------------------
  // Hooks
  // ------------------
  const location = useLocation();
  const { activeCustomerCart } = useReduxCustomer(null);

  // --------------------------------
  // calculate in cart products price
  // --------------------------------
  const subtotal = activeCustomerCart.reduce((prev, current) => prev + current.price, 0);

  return (
    <Holder>
      <div>
        <ul className="product-wrapper">
          {activeCustomerCart.length === 0 ? (
            <EmptyCart />
          ) : (
            activeCustomerCart.map((product, index) => (
              <Product product={product} index={index} key={index} />
            ))
          )}
        </ul>
      </div>

      {location.pathname === "/checkout" ? (
        <CheckoutCart subtotal={subtotal} />
      ) : activeCustomerCart.length !== 0 ? (
        <PreCheckoutCart subtotal={subtotal} />
      ) : null}
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

  .product-wrapper {
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
    display: grid;
    grid-auto-columns: max-content;
    gap: 1em;
    margin: 1em 50%;
    text-align: center;
    font-size: 1.5em;
  }
`;
