import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  OutlinedInputProps as MUIOutlinedInputProps,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";
import { useState } from "react";

// ------------------
// props type
// ------------------
type OutlinedInputProps = MUIOutlinedInputProps & {
  name: string;
};

// ------------------
// main component
// ------------------
const FormPassword: React.FC<OutlinedInputProps> = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormControl
      variant="outlined"
      fullWidth
      error={!!meta.error && meta.touched}
    >
      <InputLabel>Password</InputLabel>
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        {...field}
        {...props}
      />
      <FormHelperText error={!!meta.error && meta.touched}>
        {meta.error && meta.touched ? meta.error : null}
      </FormHelperText>
    </FormControl>
  );
};

export default FormPassword;
