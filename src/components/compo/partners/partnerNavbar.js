"use client";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as APIURLS from "@/apis/apiconstant";
import { removeLocalStorage } from "@/helper/helper";
import { useEffect, useState } from "react";
import { useLoginData } from "@/contextapi/loginuserprovider";
import CustomAlertMessage from "@/components/customcompo/notify/customalert";
import { usePathname, useRouter } from "next/navigation";
import { Route_Path } from "@/apis/api";
import Link from "next/link";

const PartnerNavBar = () => {
  const [userData, setUserData] = useState(null);
  let IOT_PU = useLoginData();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (IOT_PU) {
      setUserData(IOT_PU);
    } else {
      setUserData(null);
    }
  }, [pathname]);

  return (
    <Box id={"partner_Nav"}>
      {!pathname.includes(Route_Path.PARTNER_LOGIN) && <CustomAlertMessage />}
      <Box
        height={10}
        sx={{ bgcolor: "#299E78" }}
      >
        &nbsp;
      </Box>
      <AppBar
        sx={{
          bgcolor: "white",
          position: "sticky",
          px: { xs: 2, md: 4 },
          py: 2,
          top: 0,
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component={Link}
              href={"/portal"}
            >
              <Box
                component={"img"}
                sx={{ width: { xs: "100%", sm: "30%", md: "20%" } }}
                src={APIURLS.BASE_PATH.OthersImage + "logo.png"}
                alt="SIVA's Partners"
              />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "calc(1.5rem + 1vw)",
                  md: "calc(0.8rem + 1vw)",
                },
                fontWeight: "bold",
                letterSpacing: 2,
                color: "black",
              }}
            >
              Partners
            </Typography>
            {userData ? (
              <Button
                variant="contained"
                style={{ background: "var(--green)", borderRadius: 0 }}
                fullWidth
                size="small"
                onClick={() => {
                  removeLocalStorage();
                  router.push("/");
                }}
              >
                Logout
              </Button>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default PartnerNavBar;
