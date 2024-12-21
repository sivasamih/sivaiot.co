import { Box, Button, Typography } from "@mui/material";
import CustomImage from "../customimage/customimage";
import { useNavigate } from "react-router-dom";

const WhereToBuy = (props) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        border: "1px solid var(--green)",
        position: "relative",
      }}>
      {props.ImageURL === "" ||
      props.ImageURL === null ||
      props.ImageURL === undefined ? null : (
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: -1,
            filter: "brightness(0.5)",
            overflow: "hidden",
          }}>
          <CustomImage
            src={props.ImageURL}
            width={"100%"}
            height={"100%"}
            loading="lazy"
            alt={props.alt}
            style={{ objectFit: "fill" }}
          />
        </Box>
      )}
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: 3,
        }}>
        <Typography
          sx={{ px: 4, pb: 2, fontSize: { xs: 16, sm: 20, md: 24, lg: 25 },color:'var(--headerColor)'}}>
          Where To buy?
        </Typography>

        <Button
          variant="contained"
          sx={{ borderRadius: "30px", px: 5 }}
          onClick={(e) => navigate("/rfid-contact")}>
          Contact US{" "}
        </Button>
      </Box>
    </Box>
  );
};
export default WhereToBuy;
