"use client";
import { Box, Typography } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { restrictedCountries, Route_Path } from "@/apis/api";
import moment from "moment";

const BlockPage = () => {
  const router = useRouter();
  const CurrentYear = moment().year();

  useEffect(() => {
    const handleLocationFallback = async () => {
      try {
        const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
        const data = await response.json();
        console.log("IP-Based Location:", data);
        const countryCode = data.country_code;

        if (restrictedCountries.includes(countryCode)) {
          router.push(Route_Path.BLOCK);
        } else {
          router.push(Route_Path.HOME);
        }
      } catch (error) {
        console.error("Error fetching IP-based location:", error);
        router.push(Route_Path.HOME);
      }
    };

    const getUserLocation = async () => {
      try {
        if (!navigator.geolocation) {
          throw new Error("Geolocation is not supported by this browser.");
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              );
              const data = await response.json();
              console.log("User Location:", data);
              const countryCode = data.countryCode;

              if (restrictedCountries.includes(countryCode)) {
                router.push(Route_Path.BLOCK);
              } else {
                router.push(Route_Path.HOME);
              }
            } catch (error) {
              console.error("Error fetching location data:", error);
              handleLocationFallback();
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
            handleLocationFallback();
          }
        );
      } catch (error) {
        console.error(error.message);
        handleLocationFallback();
      }
    };

    getUserLocation();
  }, [router]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        color: "#FFFFFF",
        animation: "fadeIn 1s ease-in-out",
        background: "linear-gradient(135deg, #1C73BC,  rgba(57,181,74,1) )",
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
      }}
    >
      {/* Animated Icon with Shadow Effect */}
      <BlockIcon
        sx={{
          fontSize: { xs: "80px", sm: "100px", md: "120px" },
          mb: 2,
          animation: "rotateEffect 5s linear infinite",
        }}
        color="error"
      />

      {/* Main Heading */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
          letterSpacing: "0.1em",
          mb: 2,
          animation: "fadeInUp 1.5s ease-in-out",
        }}
      >
        Access Denied
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.25rem" },
          maxWidth: "600px",
          mb: 3,
          lineHeight: 1.6,
          opacity: 0.9,
          animation: "fadeInUp 2s ease-in-out",
        }}
      >
        Access to this website has been restricted from your location.
      </Typography>

      {/* Decorative Divider */}
      <Box
        sx={{
          width: "80px",
          height: "5px",
          bgcolor: "#FFFFFF",
          borderRadius: "5px",
          mt: 2,
          animation: "fadeInUp 2.5s ease-in-out",
        }}
      />

      {/* Footer */}
      <Typography
        variant="caption"
        sx={{
          mt: 5,
          fontSize: { xs: "0.75rem", sm: "0.8rem" },
          opacity: 0.7,
          animation: "fadeInUp 3s ease-in-out",
          fontSize: { xs: ".5rem", sm: ".8rem", md: ".9rem" },
        }}
      >
        © {CurrentYear}
        <Link
          href="https://sivagroup.co/"
          target="_blank"
          style={{
            color: "#040EE6",
            textDecoration: "none",
            fontWeight: "bold",
            margin: "0 5px",
          }}
        >
          SIVA Group
        </Link>{" "}
        | All rights reserved.
      </Typography>

      {/* Keyframes for Animations */}
      <style
        jsx
        global
      >{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes rotateEffect {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
};

export default BlockPage;
