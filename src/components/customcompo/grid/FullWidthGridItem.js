import { Grid } from "@mui/material";

const FullWidthGridItem = ({ children }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      {children}
    </Grid>
  );
};
export default FullWidthGridItem;
