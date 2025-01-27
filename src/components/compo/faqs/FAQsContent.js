import { Route_Path } from "@/apis/api";
import CustomTable from "@/components/customcompo/customTable/customTable";
import LinkForFAQPage from "@/components/customcompo/Typo/linkForFaqPage";
import ListOrderNumber from "@/components/customcompo/Typo/listordernumber";
import Paragraph4 from "@/components/customcompo/Typo/paragraph4";
import { Box, Typography } from "@mui/material";
import Link from "next/link";


const FAQ1 = () => (
  <>
    <Paragraph4>
      RFID labels typically face challenges when used on metal surfaces due to interference caused by the properties of metal. However, specially
      designed UHF RFID labels, known as On-metal RFID tags & labels, work effectively on such surfaces.
    </Paragraph4>
    <Paragraph4>
      To overcome the challenges,
      <LinkForFAQPage title={"Mount on Metal RFID labels & tags"} url={Route_Path.PRODUCT_FAMILY + "/on-metal-uhf-labels"} />
      <Typography
        component={Link}
        href={Route_Path.PRODUCTS}
        target="_blank"
        title="RFID labels or tags"
        style={{
          textDecoration: "none",
          color: "var(--green)",
        }}
        sx={{
          fontSize: {
            xs: "calc(0.8em + 1vw)",
            md: "calc(0.2em + 1vw)",
          },
          mx: 0.5,
        }}></Typography>
      incorporate specific design features:
    </Paragraph4>
    <Box sx={{ mt: 1 }}>
      <Paragraph4>
        <ListOrderNumber>1.</ListOrderNumber>
        Spacer layer / foam material between the tag antenna and the application metal surface.
      </Paragraph4>
      <Paragraph4>
        <ListOrderNumber>2.</ListOrderNumber>
        The antenna is specially designed to operate in the presence of a reflective surface. It is tuned to perform optimally when placed on / near
        metal.
      </Paragraph4>
    </Box>
  </>
);
const FAQ2 = () => (
  <>
    <Box sx={{ mt: 2 }}>
      <CustomTable
        columns={["On-Metal RFID Labels", "Regular RFID Labels"]}
        data={[
          {
            "On-Metal RFID Labels": "Designed to work on or near metal surfaces",
            "Regular RFID Labels": "Designed for use on non-metallic surfaces.",
          },
          {
            "On-Metal RFID Labels": "Includes a spacer (e.g., foam, ferrite) to isolate the antenna from metal.",
            "Regular RFID Labels": "No spacer; antenna is in direct contact with application surface.",
          },
          {
            "On-Metal RFID Labels": "Expensive",
            "Regular RFID Labels": "Cheaper",
          },
          {
            "On-Metal RFID Labels": "Thickness is more",
            "Regular RFID Labels": "Slim and light weight",
          },
          {
            "On-Metal RFID Labels": "Application Areas: Manufacturing, Aerospace, Logistics, Healthcare, Automotive etc.",
            "Regular RFID Labels": "Application Areas: Inventory Management, Supply Chain Tracking, Retail, Logistics, etc.",
          },
        ]}
      />
    </Box>
  </>
);
const FAQ3 = () => (
  <>
    <Paragraph4>
      <LinkForFAQPage title={"On-metal UHF Labels"} url={Route_Path.BLOG + "/uhf-rfid-labels-for-metal-surface"} />
      are compatible with most RFID readers operating within the UHF frequency range (860–960 MHz)
    </Paragraph4>
    <Box sx={{ my: 2 }}>
      <Paragraph4>
        <ListOrderNumber>ETSI:</ListOrderNumber>
        865–868 MHz (Europe)
      </Paragraph4>
      <Paragraph4>
        <ListOrderNumber>FCC:</ListOrderNumber>
        902–928 MHz (North America)
      </Paragraph4>
      <Paragraph4>
        <ListOrderNumber>Global UHF:</ListOrderNumber>
        Some labels are designed to cover the entire range (860–960 MHz).
      </Paragraph4>
    </Box>
    <Paragraph4>What needs to be ensured is that the on-metal tag/label and the reader should operate in the same frequency band.</Paragraph4>
    <Paragraph4>We recommend using Circularly Polarized Antennas as it is great for general use, regardless of tag orientation.</Paragraph4>
  </>
);
const FAQ4 = () => (
  <>
    <Paragraph4>
      <LinkForFAQPage title={"RFID Hard Tags"} url={Route_Path.BLOG + "/rfid-hard-tag-for-asset-management"} />
      are durable, rugged, and long-lasting identification devices equipped with an RFID chip or antenna. These tags are designed to withstand harsh
      environmental conditions, making them suitable for use in challenging industries such as manufacturing, logistics, and supply chain management.
    </Paragraph4>
  </>
);

export { FAQ1, FAQ2, FAQ3, FAQ4 };
