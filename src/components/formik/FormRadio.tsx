import {
  TextField,
  TextFieldProps as MUITextFieldProps,
  InputLabel,
  Radio,
  Autocomplete,
} from "@mui/material";
import styled from "@emotion/styled";
import { useField } from "formik";
import styles from "../../styles";

// ------------------
// props type
// ------------------
type TextFieldProps = MUITextFieldProps & {
  name: string;
  options: string[];
};

// -------------------
// style variables
// -------------------
const { fonts } = styles;

// ------------------
// main component
// ------------------
const FormRadio: React.FC<TextFieldProps> = ({
  name,
  label,
  options,
  ...props
}) => {
  const [field, meta, form] = useField(name);

  return (
    <Holder>
      <InputLabel id={name}>{label}</InputLabel>
      <Autocomplete
        fullWidth
        id={name}
        disablePortal
        blurOnSelect
        clearOnEscape
        options={options}
        onChange={(_e, values) => form.setValue(values)}
        value={field.value ? field.value : null}
        renderOption={(props, option, { selected, index }) => (
          <li key={index} {...props}>
            <Radio style={{ marginRight: 8 }} checked={selected} {...field} />
            {option}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            placeholder="Required"
            error={!!meta.error && meta.touched}
            helperText={meta.error && meta.touched ? meta.error : undefined}
            {...props}
            {...params}
          />
        )}
      />
    </Holder>
  );
};

export default FormRadio;

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
