import { Box, Typography } from "@mui/material";

const TestingPage = async ({ params }) => {
  const ID = (await params).id;
  return (
    <Box sx={{ textAlign: "center", height: 400 }}>
      <Typography variant="h4">Product ID : {ID}</Typography>
    </Box>
  );
};
export default TestingPage;
