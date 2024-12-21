import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const PDFViewer = (props) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };
  return (
    <>
      {error ? (
        <Box
          sx={{
            p: 2,
            bgcolor: "#F2F4F7",
            borderRadius: 5,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <Typography sx={{ fontSize: "calc(1rem + 1vw)" }}>
            Error loading data. Please try again later.
          </Typography>
        </Box>
      ) : (
        <Box sx={{ width: { xs: "95vw", md: "60vw" }, height: "80vh" }}>
          <object
            key={props.key}
            data={props.src}
            width="100%"
            height="100%"
            type="application/pdf"
            aria-label="NDA"
            onLoad={() => setError(false)}
            onError={handleError}>
            <Box
              sx={{
                height: { xs: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                bgcolor: "white",
                borderRadius: 4,
              }}>
              <Typography sx={{ fontSize: "calc(1rem + 1vw)" }}>
                Not found
              </Typography>
            </Box>
          </object>
        </Box>
      )}
    </>
  );
};
export default PDFViewer;
