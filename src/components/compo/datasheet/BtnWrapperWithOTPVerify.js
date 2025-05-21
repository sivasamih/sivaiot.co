"use client";

import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import CustomModal from "@/components/customcompo/modal/custommodal";
import DataSheetDwnldForm from "./datasheetdownload";
import { getLocalStorage, ValidateIPs, ValidateUser_Data } from "@/helper/helper";
import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";

const BtnWrapperWithOTPVerify = ({ ModalFormImage, ModalTitle, DocumentURL, children }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const TIMER_MINUTES = 15;

    const SET_SUV_DATA = useCallback((userData) => {
        const currentTime = new Date();
        const endTime = new Date(currentTime.getTime() + TIMER_MINUTES * 60 * 1000);
        const SUVdata = {
            startTime: currentTime,
            endTime: endTime,
            ...userData,
        };
        localStorage.setItem("SUV", JSON.stringify(SUVdata));
    }, []);

    const SetUserInformation = useCallback(async () => {
        try {
            const SUVdata = JSON.parse(localStorage.getItem("SUV"));
            const localData = getLocalStorage();

            if (localData || SUVdata) {
                const reqData = {
                    WebsiteData: {
                        SourceID: 2,
                        TypeID: 2,
                        isChecked: false,
                        JsonData: JSON.stringify({
                            email: localData?.EmailID || SUVdata?.email,
                            name: localData?.UserName || SUVdata?.name,
                            subject: "Download " + ModalTitle,
                            product: ModalTitle || "",
                        }),
                    },
                };

                const res = await FETCHAPI.Fetch(APIURLS.APIURL.Add_Update_WebsiteData, reqData);
                if (res.status !== 2000) {
                    console.warn("Failed to send user info:", res);
                }
            }
        } catch (error) {
            console.error("Error setting user info:", error);
        }
    }, [ModalTitle]);

    const openDatasheet = useCallback(async () => {
        try {
            if (DocumentURL) {
                const validIP = await ValidateIPs();
                if (!validIP) {
                    await SetUserInformation();
                }

                const win = window.open(DocumentURL, "_blank");
                if (win) win.focus();
            }
        } catch (error) {
            console.error("Error opening datasheet:", error);
        }
    }, [DocumentURL, SetUserInformation]);

    const handleDownloadClick = async (e) => {
        e?.preventDefault?.();
        try {
            const isValid = await ValidateUser_Data();;
            if (isValid) {
                openDatasheet();
            } else {
                setModalOpen(true);
            }
        } catch (error) {
            console.error("Validation failed:", error);
        }
    };

    if(!children)return false;
    return (
        <>
            <Box onClick={handleDownloadClick} sx={{ display: "inline", cursor: "pointer" }}>
                {children}
            </Box>

            <CustomModal
                Header="BEGIN DOWNLOAD"
                open={isModalOpen}
                width="md"
                onClose={() => setModalOpen(false)}
                Content={
                    <DataSheetDwnldForm
                        ProductName={ModalTitle || ""}
                        ProductImage={ModalFormImage || ""}
                        openDatasheet={openDatasheet}
                        SET_SUV_DATA={SET_SUV_DATA}
                        onClose={() => setModalOpen(false)}
                    />
                }
            />
        </>
    );
};

export default BtnWrapperWithOTPVerify;
