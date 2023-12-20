import styled from "@emotion/styled";
import ImageRendering from "../../../components/shared/ImageRendering";
import { useSelector } from "../../../redux/Store/hooks";
import styles from "../../../styles";
import ModalItemInCart from "../../../components/formik/ModalItemInCart";

// -------------------
// style variables
// -------------------
const { fonts, colors } = styles;

// ------------------
// main component
// ------------------
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <Holder>
      {cartItems.map((item, index) =>
        item.mainPic && item.media ? (
          <ModalItemInCart item={item}>
            <ul key={index}>
              <li>
                <ImageRendering images={item.mainPic} multiple={false} width="230em" />
              </li>
              <li>
                <span>Name: </span> {item.name}
              </li>
              <li>
                <span>Colors: </span> {item.colors}
              </li>
              <li>
                <span>Sizes: </span> {item.sizes}
              </li>
              <li>
                <span>Price: </span> {item.price}
              </li>
              <li>
                <span>Amount: </span> {item.amount}
              </li>
            </ul>
          </ModalItemInCart>
        ) : cartItems[1] ? null : (
          <div className="empty-cart"> THE CART IS EMPTY </div>
        )
      )}
    </Holder>
  );
};

export default CartPage;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  ul {
    border: 2px solid #000000;
    padding: 0.5em;
    ${fonts.bold}
    list-style: none;
    width: 15em;
    border-radius: 8px;
    cursor: pointer;

    li {
      color: ${colors.darkBlue};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      :hover {
        white-space: normal;
      }

      img {
        object-fit: cover;
      }
    }

    li:first-of-type {
      text-align: center;
      height: 16em;
    }
  }

  span {
    color: ${colors.lightBlue};
    ${fonts.semiBold}
  }

  .empty-cart {
    margin: auto auto;
    text-align: center;
    font-size: 1.5em;
  }
`;
