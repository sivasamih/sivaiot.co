import { Typography } from "@mui/material";

const Paragraph3 = ({
  children,
  variant,
  component,
  onClick,
  color,
  sx,
  ...rest
}) => {
  return (
    <>
      {children ? (
        <Typography
          variant={variant}
          component={component}
          onClick={onClick}
          sx={{
            my: 1,
            fontSize: { xs: "calc(0.7em + 1vw)", md: "calc(0.2em + 1vw)" },
            fontWeight: "bold",
            letterSpacing: 1,
            fontFamily: "LibreBaskerville",
            fontSize: { xs: "calc(0.8em + 1vw)", md: "calc(0.2em + 1vw)" },
          }}
          color={color ? color : "var(--white)"}
          {...rest}
        >
          {children}
        </Typography>
      ) : null}
    </>
  );
};
export default Paragraph3;
