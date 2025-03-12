"use client"
import React, { useEffect } from "react";
import { Backdrop, Skeleton } from "@mui/material";
import { Box, Container } from "@mui/system";
import CustomLoading from "@/components/customcompo/CustomLoading/customLoading";
import HomePageSkeleton from "@/components/customcompo/skeleton/homePageSkeleton";

const Loading = (props) => {


  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.open]);

  return (
    <>
      {
        props.open || props.open === undefined ? <>
          <CustomLoading />
          <HomePageSkeleton />
        </> : ""
      }
    </>
  );
};

export default Loading;
