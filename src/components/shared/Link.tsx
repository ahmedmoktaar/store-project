import { Link as RouterLink } from "react-router-dom";
import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material";
import React from "react";

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
    <MUILink component={RouterLink} {...props} sx={{ textDecoration: "none" }}>
      {props.children}
    </MUILink>
  );
};

export default Link;
