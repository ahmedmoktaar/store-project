import { Button, ButtonProps } from "@mui/material";

const MuiButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button variant="contained" fullWidth {...props}>
      {props.children}
    </Button>
  );
};

export default MuiButton;
