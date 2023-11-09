import { TextField, TextFieldProps } from "@mui/material";

const TextInput: React.FC<TextFieldProps> = (props) => {
  return <TextField {...props} fullWidth />;
};

export default TextInput;
