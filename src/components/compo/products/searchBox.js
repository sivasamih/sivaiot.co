"use client";
import useMobileLandscape from "@/app/hooks/mobileLandscape";
import SearchBar from "@/components/customcompo/custominputfield/searchbar";
import { Box, Container } from "@mui/material";

const SearchBox = (props) => {
  const isMobileLandscape = useMobileLandscape();

  return (
    <Box
      sx={{
        borderRight: "3rem solid #F2F4F7",
        borderLeft: "3rem solid transparent",
        position: isMobileLandscape ?  "initial" :"sticky",
        top: { xs: 70, md: 40 },
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          marginRight: "-3rem",
          marginLeft: "-3rem",
          // mt: 2,
          py: 2,
          bgcolor: "white",
        }}
      >
        <Container>
          <SearchBar
            value={props.searchQuery}
            onChange={(e) => props.setSearchQuery(e.target.value)}
            AccChecked={props.IsExpandAll}
            onAccChnage={(e) => props.expandAllACC(e.target.checked)}
          />
        </Container>
      </Box>
    </Box>
  );
};
export default SearchBox;
