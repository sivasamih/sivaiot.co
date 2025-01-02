"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { restrictedCountries, Route_Path } from "@/apis/api";

const AccessDenied = () => {
  const router = useRouter();
  const pathName = usePathname();

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
        }
      } catch (error) {
        console.error("Error fetching IP-based location:", error);
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
  }, [router, pathName]);

  return null;
};

export default AccessDenied;
