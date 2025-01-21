'use client'
import * as APIURLS from "@/apis/apiconstant";
import { useState } from "react";

const NewIcon = (props) => {
  const [isImageError, setIsImageError] = useState(false)

  const handleImageError = () => {
    setIsImageError(true)
  }
  const IconURL = props.Icon || APIURLS.BASE_PATH.Others + "new_icon.gif";
  return (
    <img
      src={IconURL}
      style={{
        margin: "0 0 0 5px", display: isImageError ? 'none' : "initial"
      }}
      onError={handleImageError}
    />
  );
};
export default NewIcon;
