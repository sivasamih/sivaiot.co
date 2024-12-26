import { LocationOn } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";

const Address = () => {
  const locations = [
    {
      name: "INDIA (HQ)",
      address:
        "N-6, Verna Industrial Area, Phase - 4, Verna, Goa - 403722, INDIA",
    },

    {
      name: "USA",
      address:
        "7901 4th ST N, STE 300, St. Petersburg - 33702, United States of America",
    },
  ];
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        },
        gap: 4,
        placeItems: "center",
        "& p": {
          fontSize: {
            xs: "calc(1rem + 1vw)",
            md: "calc(0.1em + 1vw)",
          },
          color: "#455a64",
          lineHeight: 1.2,
        },

        "& span": {
          color: "var(--headerColor)",
          fontWeight: "bold",
          fontSize: {
            xs: "calc(1em + 1vw)",
            md: "calc(0.5em + 1vw)",
          },
        },
        "& svg": {
          color: "var(--lightGray)",
          fontSize: { xs: 30, sm: 40, md: 50 },
        },
        "& .MuiListItem-root": {
          p: { xs: 0, sm: 1 },
        },
      }}
    >
      {locations.map((location, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <LocationOn />
          </ListItemIcon>
          <ListItemText
            primary={location.name}
            secondary={location.address}
          />
        </ListItem>
      ))}
    </Box>
  );
};
export default Address;
