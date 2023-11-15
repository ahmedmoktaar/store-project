import styled from "@emotion/styled";
import {
  TextField,
  TextFieldProps as MUITextFieldProps,
  InputLabel,
} from "@mui/material";
import { useField } from "formik";
import styles from "../../styles";

// ------------------
// props type
// ------------------
type TextFieldProps = MUITextFieldProps & {
  name: string;
};

// -------------------
// style variables
// -------------------
const { fonts } = styles;

// ------------------
// main component
// ------------------
const TextFormLabeled: React.FC<TextFieldProps> = ({
  name,
  label,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <Holder>
      <InputLabel id={name}>{label}</InputLabel>
      <TextField
        id={name}
        variant="outlined"
        error={!!meta.error && meta.touched}
        helperText={meta.error && meta.touched ? meta.error : null}
        fullWidth
        placeholder="Required"
        {...field}
        {...props}
      />
    </Holder>
  );
};

export default TextFormLabeled;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  display: grid;
  grid-template-columns: 11em 30em;
  align-items: center;
  gap: 1.5em;
  label {
    font-size: 1.2em;
    ${fonts.bold}
    ::after {
      content: " :";
    }
  }
`;
