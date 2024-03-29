import {
  Autocomplete,
  InputLabel,
  TextField,
  TextFieldProps as MUITextFieldProps,
  FormHelperText,
} from "@mui/material";
import styled from "@emotion/styled";
import { useField } from "formik";
import styles from "../../styles";

// ------------------
// props type
// ------------------
type TextFieldProps = MUITextFieldProps & {
  name: string;
  options: { label: string; gender: string; key: string }[];
};

// -------------------
// style variables
// -------------------
const { fonts } = styles;

// ------------------
// main component
// ------------------
const FormAutoComplete: React.FC<TextFieldProps> = ({ name, label, options, ...props }) => {
  const [field, meta, form] = useField(name);
  return (
    <Holder>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Autocomplete
        blurOnSelect
        clearOnEscape
        disablePortal
        handleHomeEndKeys
        id={name}
        options={options}
        onChange={(_e, value) => form.setValue(value.label)}
        value={field.value ?? ""}
        groupBy={(option) => option.gender}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderOption={(props, option) => (
          <li {...props} {...field} key={option.key}>
            {option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            {...props}
            {...params}
            error={!!meta.error && meta.touched}
            placeholder="Required"
          />
        )}
      />
      <FormHelperText error={!!meta.error && meta.touched} className="error-message">
        {meta.error && meta.touched ? meta.error : null}
      </FormHelperText>
    </Holder>
  );
};

export default FormAutoComplete;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  display: grid;
  grid-template-columns: 11em 30em;
  align-items: center;
  label {
    font-size: 1.2em;
    ${fonts.bold}
    ::after {
      content: " :";
    }
  }
  .error-message {
    grid-column: 2 /3;
  }
`;
