import { SyntheticEvent, useState } from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import clothingTypesList from "../assets/data/clothesTypesList";

// ----------------
// main component
// ----------------
const SearchBar = () => {
  // -----------------------------------
  // display suggestions while typing
  // -----------------------------------
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (inputValue.length > 2) {
      setOpen(true);
    }
  };

  const handleInputChange = (
    _event: SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
    if (newInputValue.length > 2) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        clearOnEscape
        blurOnSelect
        open={open}
        onOpen={handleOpen}
        onClose={() => setOpen(false)}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        options={clothingTypesList}
        groupBy={(option) => option.gender}
        getOptionLabel={(option) => option.label}
        size="small"
        sx={{
          width: 450,
          bgcolor: "white",
          "&&&&& .MuiOutlinedInput-root": {
            paddingRight: "0.5em",
          },
          borderRadius: "1em",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search Product"
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
