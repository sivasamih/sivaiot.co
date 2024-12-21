import { Box, Typography } from "@mui/material";

export async function generateMetadata({ params }) {
  const ID = (await params).id;
  return {
    title: "Product ID : " + ID,
  };
}

const TestingPage = async ({ params }) => {
  const ID = (await params).id;
  return (
    <Box sx={{ textAlign: "center", height: 400 }}>
      <Typography variant="h4">Product ID : {ID}</Typography>
    </Box>
  );
};
export default TestingPage;
