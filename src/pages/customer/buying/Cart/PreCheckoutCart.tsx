import { Typography } from "@mui/material";
import Link from "../../../../components/shared/Link/Link";
import MuiButton from "../../../../components/shared/MuiButton";

// -------------
// Props
// -------------
interface Props {
  subtotal: number;
}

// ------------------
// main component
// ------------------
const PreCheckoutCart: React.FC<Props> = ({ subtotal }) => {
  return (
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
  );
};

export default PreCheckoutCart;
