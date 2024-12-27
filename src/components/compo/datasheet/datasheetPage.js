"use client";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import * as APIURLS from "@/apis/apiconstant";
import { ValidateUser_Data } from "@/helper/helper";
import Loading from "@/app/loading";

const DatasheetPage = ({ name }) => {
  const [isAutheraize, setIsAuthrize] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleError = () => {
    setError(true);
  };

  useEffect(() => {
    setError(false);
    (async () => {
      setLoading(true);
      let valid = await ValidateUser_Data();
      if (valid) {
        setIsAuthrize(true);
        setLoading(false);
      } else {
        setIsAuthrize(false);
        setLoading(false);
      }
    })();
  }, []);

  // const ValidateSUV_Data = () => {
  //   let isValid = false;

  //   try {
  //     const SUVdata = JSON.parse(localStorage.getItem("SUV"));

  //     if (SUVdata !== undefined && SUVdata !== null) {
  //       const startTime = new Date(SUVdata.startTime);
  //       const endTime = new Date(SUVdata.endTime);

  //       isValid = currentTime >= startTime && currentTime <= endTime;
  //     }
  //   } catch (ex) {}

  //   return isValid;
  // };
  return (
    <>
      <Box sx={{ background: "linear-gradient(var(--blue), var(--green))" }}>
        {loading ? (
          <Box sx={{ height: "100vh", p: 2, bgcolor: "transparent" }}>
            <Loading open={loading} />
          </Box>
        ) : (
          <Box
            style={{ padding: 0 }}
            sx={{ height: "100%" }}
          >
            {!isAutheraize ? (
              <Box sx={{ p: 2, bgcolor: "transparent" }}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "#F2F4F7",
                    borderRadius: 5,
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      bgcolor: "white",
                      borderRadius: 4,
                    }}
                  >
                    <Typography sx={{ fontSize: "calc(1rem + 1vw)" }}>
                      You are not authorized
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
              <>
                {error ? (
                  <>
                    <Box sx={{ p: 2, bgcolor: "#F2F4F7", borderRadius: 5 }}>
                      <Box
                        sx={{
                          height: { xs: 200, md: 400 },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          bgcolor: "white",
                          borderRadius: 4,
                        }}
                      >
                        <Typography sx={{ fontSize: "calc(1rem + 1vw)" }}>
                          Datasheet Not found
                        </Typography>
                      </Box>
                    </Box>
                  </>
                ) : (
                  <Box sx={{ height: { xs: "100vh", md: "100vh" } }}>
                    <object
                      data={APIURLS.BASE_PATH.DatasheetsBaseUrl + name}
                      key={name}
                      width="100%"
                      height="100%"
                      type="application/pdf"
                      aria-label="Datasheets"
                      onError={handleError}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          p: 2,
                        }}
                      >
                        <Box
                          sx={{
                            p: 2,
                            bgcolor: "#F2F4F7",
                            borderRadius: 5,
                            height: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexDirection: "column",
                              bgcolor: "white",
                              borderRadius: 4,
                            }}
                          >
                            <Typography sx={{ fontSize: "calc(1rem + 1vw)" }}>
                              Datasheet Not found
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </object>
                  </Box>
                )}
              </>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default DatasheetPage;
