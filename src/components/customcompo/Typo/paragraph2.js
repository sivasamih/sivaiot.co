import { Typography } from "@mui/material";

const Paragraph2 = (props) => {
  return (
    <>
      {props.children ? (
        <Typography
          variant={props.variant}
          component={props.component}
          onClick={props.onClick}
          sx={{ my: 1, fontSize: "calc(0.5em + 1vw)" }}
        >
          {props.children}
        </Typography>
      ) : null}
    </>
  );
};
export default Paragraph2;
