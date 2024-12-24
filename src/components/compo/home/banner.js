import { Box } from "@mui/material";
import { HomeBannerData } from "../../../helper/helper";
import CustomBox from "../../customcompo/box/CustomBox";
import CardOne from "../../customcompo/cards/cardOne";

const Banner = () => {
  return (
    <CustomBox>
      {HomeBannerData &&
        HomeBannerData.map((item, i) => {
          return (
            <Box key={i}>
              <CardOne
                index={i}
                image={item.ImgPath}
                title={item.title}
                description={item.description}
                imagePosition={i % 2 === 0 ? "left" : "right"}
              />
            </Box>
          );
        })}
    </CustomBox>
  );
};

export default Banner;
