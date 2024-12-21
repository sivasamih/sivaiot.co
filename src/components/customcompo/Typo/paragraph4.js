import { Typography } from "@mui/material";

const Paragraph4 = ({
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
            fontSize: { xs: "calc(0.8em + 1vw)", md: "calc(0.2em + 1vw)" },
            lineHeight: 1.2,
            ...sx,
          }}
          color={color ? color : "var(--lightGray)"}
          {...rest}>
          {children}
        </Typography>
      ) : null}
    </>
  );
};
export default Paragraph4;
