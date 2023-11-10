import { TextField, TextFieldProps as MUITextFieldProps } from "@mui/material";
import { useField } from "formik";

// ------------------
// props type
// ------------------
type TextFieldProps = MUITextFieldProps & {
  name: string;
};

// ------------------
// main component
// ------------------
const TextForm: React.FC<TextFieldProps> = ({name, ...props}) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      variant="outlined"
      error={!!meta.error && meta.touched}
      helperText={meta.error && meta.touched ? meta.error : null}
      fullWidth
      {...field}
      {...props}
    />
  );
};
export default TextForm;
