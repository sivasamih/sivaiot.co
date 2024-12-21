import React from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

const CustomTextField = ({
  required,
  disabled,
  id,
  label,
  multiline,
  value,
  onChange,
  rows,
  variant,
  size,
  name,
  helperText,
  error,
  focused,
  InputProps,
  type = "text",
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        "& input": {
          color: disabled ? "black" : "initial",
          bgcolor: "white",
        },

        "&  .MuiFormLabel-root": {
          bgcolor: "transparent",
          fontFamily: "LibreBaskerville",
          fontSize: {
            xs: "calc(0.6rem + 1vw)",
            md: "calc(0.1rem + 1vw)",
          },
          color: "#455a64",
        },

        "& .MuiFilledInput-root::before": {
          borderBottom: "2px solid var(--blue)",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "black",
        },
        "& .MuiFilledInput-root": {
          bgcolor: "white",
          borderRadius: 0,
        },
        "& .MuiFilledInput-root:hover, & .MuiFilledInput-root:active, & .MuiFilledInput-root:focus":
          {
            bgcolor: "white",
          },
        "& .MuiFilledInput-input": {
          pb: 0.5
        },
        ".Mui-disabled": {
          bgcolor: "var(--borderColor)",
          color: "#455a64",
        },
        "& .MuiFormLabel-asterisk": {
          color: "red",
        },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      component={motion.div}>
      <TextField
        required={required}
        disabled={disabled}
        id={id}
        name={name}
        label={label}
        fullWidth
        focused={focused}
        margin="dense"
        size={size ? size : "small"}
        variant={variant ? variant : "filled"}
        multiline={multiline}
        value={value}
        onChange={onChange}
        rows={rows}
        helperText={helperText}
        error={error}
        InputProps={InputProps}
        type={type}
      />
    </Box>
  );
};

export default CustomTextField;
