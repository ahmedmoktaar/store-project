import { FormControlLabel, Checkbox } from "@mui/material";

interface props {
  label: string;
}
const CheckBox: React.FC<props> = (props) => {
  return <FormControlLabel control={<Checkbox />} label={props.label} />;
};

export default CheckBox;
