import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import {
  TextField,
  TextFieldProps as MUITextFieldProps,
  InputLabel,
  Checkbox,
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
};

// -------------------
// style variables
// -------------------
const { fonts } = styles;

// -------------------
// Icons
// -------------------
const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

// ------------------
// main component
// ------------------
const FormSelect: React.FC<TextFieldProps> = ({
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
        multiple
        fullWidth
        id={name}
        options={options}
        onChange={(_e, values) =>
          form.setValue(values.map((item) => item))
        }
        limitTags={2}
        disableCloseOnSelect
        handleHomeEndKeys
        disablePortal
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
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
            {...field}
          />
        )}
      />
      <FormHelperText error={!!meta.error && meta.touched} className="error-message">
        {meta.error && meta.touched ? meta.error : null}
      </FormHelperText>
    </Holder>
  );
};

export default FormSelect;

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
  .error-message{
    grid-column: 2 /3 ;
  }
`;
