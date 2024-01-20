import Link from "../../../../components/shared/Link/Link";
import MuiButton from "../../../../components/shared/MuiButton";

export const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <span>THE CART IS EMPTY</span>
      <Link to="/">
        <MuiButton color="success">Back TO HOME PAGE</MuiButton>
      </Link>
    </div>
  );
};
