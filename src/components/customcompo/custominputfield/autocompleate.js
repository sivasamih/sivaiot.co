import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { List, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ disabled }) => ({
    backgroundColor: disabled ? "#f2f4f7" : "inherit",
  }));

const CustomAutoComplete = (props) => {
  return (
    <>
      <Autocomplete
        value={props.value}
        onChange={(event, newValue) => {
          props.onChange(newValue);
        }}
        id={props.id}
        name={props.name}
        disabled={props.disabled}
        options={props.options ? props.options : []}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label={props.label}
            margin="dense"
            name={props.name}
            fullWidth
            disabled={props.disabled}
          />
        )}
        getOptionLabel={(option) => option.name}
      />
    </>
  );
};

export default CustomAutoComplete;
