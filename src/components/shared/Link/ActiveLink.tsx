import { NavLink } from "react-router-dom";
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
const ActiveLink: React.FC<Props> = (props) => {
  return (
    <MUILink
      sx={{
        color: `${colors.white}`,
        textDecoration: "none",
        opacity: 0.6,
        "&.active": {
          opacity: 1,
          backgroundColor: `${colors.lightBlue}`,
        },
        " :hover": {
          opacity: 1,
          textDecoration: "underline",
        },
      }}
      component={NavLink}
      {...props}
    >
      {props.children}
    </MUILink>
  );
};

export default ActiveLink;
