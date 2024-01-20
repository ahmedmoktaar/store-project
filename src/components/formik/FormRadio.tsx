import {
  TextField,
  TextFieldProps as MUITextFieldProps,
  InputLabel,
  Radio,
  Autocomplete,
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
  options: string[];
  deleteGridTemplateColumns?: boolean;
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
  deleteGridTemplateColumns,
  ...props
}) => {
  const [field, meta, form] = useField(name);
  return (
    <Holder style={deleteGridTemplateColumns ? {} : { gridTemplateColumns: "11em 30em" }}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Autocomplete
        fullWidth
        id={name}
        disablePortal
        blurOnSelect
        clearOnEscape
        options={options} 
        onChange={(_e, values) => form.setValue(values)}
        value={field.value || null}
        renderOption={(props, option, { index,selected }) => (
          <li key={index} {...props}>
            <Radio
              style={{ marginRight: 8 }}
              {...field} 
              value={option} 
              checked={selected}
            />
            {option}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            placeholder="Required"
            error={!!meta.error && meta.touched}
            {...props}
            {...params}
          />
        )}
      />
      <FormHelperText error={!!meta.error && meta.touched} className="error-message">
        {meta.error && meta.touched ? meta.error : null}
      </FormHelperText>
    </Holder>
  );
};

export default FormRadio;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  display: grid;
  align-items: center;
  label {
    font-size: 1.2em;
    ${fonts.bold}
  }
  .error-message{
    grid-column: 2 /3 ;
  }
`;
