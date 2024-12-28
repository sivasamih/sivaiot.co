"use client";
import SearchBar from "@/components/customcompo/custominputfield/searchbar";
import { Box, Container } from "@mui/material";

const ProductSearchBox = (props) => {
  return (
    <Box
      sx={{
        borderRight: "3rem solid #F2F4F7",
        borderLeft: "3rem solid transparent",
        position: "sticky",
        top: 0,
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          marginRight: "-3rem",
          marginLeft: "-3rem",
          // mt: 2,
          p: 2,
          px: 4,
          bgcolor: "white",
        }}
      >
        <div>
          <SearchBar
            value={props.searchQuery}
            onChange={(e) => props.setSearchQuery(e.target.value)}
            AccChecked={props.IsExpandAll}
            onAccChnage={(e) => props.expandAllACC(e.target.checked)}
          />
        </div>
      </Box>
    </Box>
  );
};
export default ProductSearchBox;
