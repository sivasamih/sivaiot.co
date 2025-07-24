import { LocationOn } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Address = () => {
  const locations = [
    {
      country: "INDIA (HQ)",
      name: "SIVA INOTEC LIMITED",
      address: "N-6, Verna Industrial Area, Phase - 4, Verna, Goa - 403722, INDIA",
    },

    {
      country: "USA",
      name: "SIVA LLC",
      address: "7901 4th Street North, STE 300 St. Petersburg, Florida 33702 United States",
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
        // placeItems: "center",
        "& h6": {
          fontSize: {
            xs: "calc(1rem + 1vw)",
            md: "calc(0.2em + 1vw)",
          },
          color: "#455a64",
          color: "var(--headerColor)",
          lineHeight: 1.2,
        },

        "& h5": {
          color: "var(--green)",
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
      }}>
      {locations.map((location, index) => (
        <ListItem key={index} sx={{ alignItems: "start" }}>
          <ListItemIcon>
            <LocationOn />
          </ListItemIcon>
          {/* <ListItemText
            primary={location.country}
            secondary={location.name}
          /> */}
          <Box>
            <Typography variant="h5" color="text.secondary">
              {location.country}
            </Typography>
            <Typography component="h6" color="text.secondary">
              {location.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xs: "calc(1rem + 1vw)",
                  md: "calc(0.1em + 1vw)",
                },
                color: "#455a64",
                lineHeight: 1.2,
              }}>
              {location.address}
            </Typography>
          </Box>
        </ListItem>
      ))}
    </Box>
  );
};
export default Address;
