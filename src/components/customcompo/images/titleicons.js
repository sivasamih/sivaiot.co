'use client'

import { useState } from "react";

const TitleIcons = (props) => {
  const [isImageError, setIsImageError] = useState(false)

  const handleImageError = () => {
    setIsImageError(true)
  }
  return (
    <img
      src={props.Icon}
      alt={props.alt || "icon"}
      style={{
        width: "30px",
        height: "30px",
        transition: "height 0.5s ease-in-out",
        verticalAlign: "bottom",
        margin: "0 0 0 5px",
        border: "none",
        display: isImageError ? 'none' : "initial"
      }}
      onError={handleImageError}
    />
  );
};

export default TitleIcons;
