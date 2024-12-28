import { Search } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Switch,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";

const SearchBar = (props) => {
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    let input = document.querySelector("input");
    if (input) {
      input.focus();
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "var(--borderColor)",
        border: "1px solid #b0bec5  ",
        // boxShadow: "0 0 5px black inset",
        borderBottomRightRadius: 20,
        display: "flex",
        overflow: "hidden",
        flexDirection: { xs: "row" },
        "& input": {
          py: 2,
        },
      }}>
      <TextField
        placeholder="Search RFID Tags & Labels"
        fullWidth
        value={props.value}
        onChange={props.onChange}
        autoComplete="off"
        // ref={inputRef}
        InputProps={{
          ref: inputRef,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearchClick}>
                <Search
                  sx={{
                    // color: "var(--white)",
                    fontSize: {
                      xs: "calc(1.8rem + 1vw)",
                      md: "calc(2rem + 1vw)",
                    },
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            "&::placeholder": {
              // color: "var(--black)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            // color: "var(--white)",
            fontSize: { xs: "calc(1rem + 1vw)", md: "calc(0.5rem + 1vw)" },
          },
        }}
      />
      <Box
        sx={{
          bgcolor: 'white',
          // m: 0.5,
          // mr: 0.7,
          borderLeft: "2px solid var(--lightGray)",
          // boxShadow: "1px 0 15px var(--lightGray)  ",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          minWidth: { xs: "30%", md: "25%",lg:"20%" },
          alignItems: "center",
          borderBottomRightRadius: 15,
          borderTopLeftRadius: 20,
          "& .MuiFormControlLabel-root": {
            gap: 2,
          },
        }}>
        <FormControl component="fieldset" sx={{ m: 0 }} size="medium">
          <FormControlLabel
            checked={props.AccChecked}
            onChange={props.onAccChnage}
            inputprops={{ "aria-label": "controlled" }}
            value="start"
            control={<Switch color="primary" />}
            label="Collapse all"
            labelPlacement="start"
            sx={{ m: 0 }}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default SearchBar;
