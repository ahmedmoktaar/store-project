import { Typography, Alert } from "@mui/material";
import FormTextField from "../../../../components/formik/FormTextField";
import MuiButton from "../../../../components/shared/MuiButton";

// -------------
// Props
// -------------
interface Props {
  promoCodeValue: number;
}

// ------------------
// main component
// ------------------
const PromoCode: React.FC<Props> = ({ promoCodeValue }) => {
  return (
    <div>
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
    </div>
  );
};

export default PromoCode;
