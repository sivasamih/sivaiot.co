import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const CustomTextfield = (props) => {
  return (
    <Box sx={{ "& .MuiFormLabel-asterisk": { color: "red" } }}>
      <TextField
        required={props.required}
        type={props.type?props.type:"text"}
        name={props.name}
        id={props.id}
        label={props.label}
        variant="outlined"
        onChange={props.onChange}
        value={props.value}
        size="small"
        fullWidth
        margin="dense"
        multiline={props.multiline}
        rows={props.rows}
        error={props.error}
        helperText={props.helperText}
      />
    </Box>
  );
};

export default CustomTextfield;
