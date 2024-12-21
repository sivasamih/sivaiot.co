import { Grid, TextField, Typography } from "@mui/material";

const Customgridtextfield = (props) => {
  return (
    <Grid container spacing={0}>
      {props.label && (
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "calc(1rem + 1vw)", md: "calc(0.1rem + 1vw)" },
            }}>
            {props.label}
            {props.required && <span style={{ color: "red",padding:'0px 0 0 2px ' }}>*</span>}
          </Typography>
        </Grid>
      )}
      <Grid item xs={12} md={props.label ? 8 : 12}>
        <TextField
          name={props.name}
          id={props.id}
          type="text"
          variant="outlined"
          margin="dense"
          size="small"
          value={props.value}
          onChange={props.onChange}
          fullWidth
          disabled={props.disabled}
          sx={{
            backgroundColor: props.disabled ? "rgba(0, 0, 0, 0.1)" : "inherit",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Customgridtextfield;
