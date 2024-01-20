import { Typography } from "@mui/material";

// ---------------------
// Props
// ---------------------
interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// ------------------
// main component
// ------------------
const TabPanel = ({ children, value, index }: Props) => {
  return (
    <div hidden={value !== index}>{value === index && <Typography>{children}</Typography>}</div>
  );
};
export default TabPanel;
