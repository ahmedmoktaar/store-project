import { Button, ButtonProps } from "@mui/material";

const MuiButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button variant="contained"  {...props}>
      {props.children}
    </Button>
  );
};

export default MuiButton;
