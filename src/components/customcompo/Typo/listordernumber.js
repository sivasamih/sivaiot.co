import { Typography } from "@mui/material";

const ListOrderNumber = ({
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
          component={"span"}
          onClick={onClick}
          sx={{
            fontSize: { xs: "calc(0.8em + 1vw)", md: "calc(0.2em + 1vw)" },
            lineHeight: 1.2,
            fontWeight: "bold",
            mr:1
          }}
          color={color ? color : "var(--lightGray)"}
          {...rest}>
          {children}
        </Typography>
      ) : null}
    </>
  );
};
export default ListOrderNumber;
