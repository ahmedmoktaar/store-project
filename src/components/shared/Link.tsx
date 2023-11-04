import { Link as RouterLink } from "react-router-dom";
import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material";
import styles from "../../styles";

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
      component={RouterLink}
      {...props}
      sx={{
        color: `${colors.white}`,
        textDecoration: "none",
        "&:hover": {
          opacity: 0.7,
        },
        "&:active": {
          opacity: 0.9,
        },
      }}
    >
      {props.children}
    </MUILink>
  );
};

export default Link;
