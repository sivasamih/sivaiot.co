import { Box, Container, Divider, Typography } from "@mui/material";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import Link from "next/link";

export const metadata = {
  title: "RFID Tag Manufacturer | RFID Label Supplier - SIVA IoT",
  description:
    "SIVA IoT develops and manufactures wireless identification RFID labels & tags that identifies assets, streamlines critical production processes, makes payments secure, supply chains efficient and much more. More than just RFID labels",
};

async function GetAllCategoriesWithProduct() {
  let data;
  try {
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.WebCategoryWiseProducts);
    if (res.status === 200) {
      data = await res.json();
    }
  } catch (ex) {}
  //   console.log("data>>>", data);
  //   console.log("data>>>productList", data[0].productList[0]);
  return data;
}

const RFIDProducts = async () => {
  const Categories = await GetAllCategoriesWithProduct();
  if (!Categories) return;
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ textAlign: "center" }}
      >
        RFID Product page
      </Typography>
      <Container>
        {Categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              margin: 2,
              padding: 2,
              border: 1,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6">{category.name}</Typography>
            <Divider />
            {category?.productList?.map((product, i) => (
              <Box key={i}>
                <Link href={"/rfid-tags-and-labels/" + product.link}>
                  {product.name}
                </Link>
              </Box>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
};
export default RFIDProducts;
