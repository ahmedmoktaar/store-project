import { Link as RouterLink } from "react-router-dom";
import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material";
import styles from "../../../styles";

// ----------------
// style variables
// ----------------
const { colors } = styles;

// ---------------
// interface
// ---------------
interface Props extends MUILinkProps {
  to?: string;
}

// ---------------
// main component
// ---------------
const Link: React.FC<Props> = (props) => {
  return (
    <MUILink
      sx={{ ":hover": { color: colors.darkOrange } }}
      component={RouterLink}
      {...props}
    >
      {props.children}
    </MUILink>
  );
};

export default Link;
