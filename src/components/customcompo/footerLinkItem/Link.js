import { ListItem } from "@mui/material";
import Link from "next/link";

const CustomLink = ({ name, href }) => {
  return (
    <ListItem
      component={Link}
      href={href}
      title={name}
      sx={{
        display: "list-item",
        textDecoration: "none",
        color: "inherit",
        fontFamily: "Spectral",
        textAlign: "center",
      }}
    >
      {name}
    </ListItem>
  );
};
export default CustomLink;
