import { useEffect, useState } from "react";

function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

export default function useMobileLandscape() {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = isMobileDevice();
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      setIsMobileLandscape(isMobile && isLandscape);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  return isMobileLandscape;
}
