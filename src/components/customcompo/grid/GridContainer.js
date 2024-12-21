import { Grid } from "@mui/material";

const GridContainer = ({ children }) => {
  return (
    <Grid container spacing={0}>
      {children}
    </Grid>
  );
};
export default GridContainer;
