import { FormHelperText, ToggleButton } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useField } from "formik";

// ------------------
// props type
// ------------------
interface Props {
  list: string[];
  name: string;
}

// ------------------
// main component
// ------------------
const ToggleButtonsMultiple: React.FC<Props> = ({ list, name }) => {
  const [field, meta, form] = useField(name);

  return (
    <>
      <ToggleButtonGroup
        {...field}
        id={name}
        color="error"
        onChange={(_e, value) => form.setValue(value)}
      >
        {list.map((element) => {
          return (
            <ToggleButton
              id={name}
              key={element}
              value={element}
              style={{ fontWeight: "bold" }}
            >
              {element}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      <FormHelperText error={!!meta.error && meta.touched} style={{width:'max-content', margin: '0 4em'}}>
        {meta.error && meta.touched ? meta.error : null}
      </FormHelperText>
    </>
  );
};
export default ToggleButtonsMultiple;
