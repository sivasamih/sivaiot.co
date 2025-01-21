"use client";

import CustomModal2 from "@/components/customcompo/modal/modal2";
import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";
import ContactInfo from "../contactus/contactinfo";
import CustomListButton from "@/components/customcompo/button/customListButton";
import { Route_Path } from "@/apis/api";
import { PartnerSideBarButtonList } from "@/helper/helper";

const PartnerSideBar = () => {
    // const [openContatInfo, setOpenContactInfo] = useState(false);



    return (
        <>
            <Box sx={{ px: 2 }}>
                <List sx={{ color: "white" }}>
                    {PartnerSideBarButtonList?.map((item, index) => {
                        return <CustomListButton key={index} url={item.url} title={item.title} />;
                    })}
                </List>
            </Box>
            {/* ************-----Bottom Links-------**************** */}
            {/* <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    bgcolor: "#37b056ca",
                    boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.5)",
                }}>
                <List
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                        alignItems: "center",
                        px: 4,
                        gap: 2,
                    }}>
                    <ListItem
                        sx={{
                            "--size": "6px",
                            p: 0,
                            pl: 1,
                            textAlign: "center",
                            position: "relative",
                            textDecoration: "none",
                            color: "black",
                            fontSize: "calc(.5rem + 0.5vw)",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                display: "block",
                                width: "var(--size)",
                                height: "var(--size)",
                                borderRadius: "50%",
                                bgcolor: "black",
                                top: "50%",
                                left: -5,
                                transform: "translate(0, -50%)",
                            },
                        }}
                        component={Link}
                        href="https://sivagroup.co/"
                        title="SIVA Group"
                        target="_blank"
                        rel="noopener noreferrer">
                        SIVA Group
                    </ListItem>

                    <ListItem
                        sx={{
                            "--size": "6px",
                            p: 0,
                            pl: 1,
                            cursor: "pointer",
                            position: "relative",
                            textAlign: "center",
                            color: "black",
                            fontSize: "calc(.5rem + 0.5vw)",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                display: "block",
                                width: "var(--size)",
                                height: "var(--size)",
                                borderRadius: "50%",
                                bgcolor: "black",
                                top: "50%",
                                left: -5,
                                transform: "translate(0, -50%)",
                            },
                        }}
                        onClick={() => setOpenContactInfo(true)}
                        title="Contact">
                        Contact
                    </ListItem>
                </List>
            </Box> */}

            {/* <CustomModal2
                open={openContatInfo}
                onClose={() => {
                    setOpenContactInfo(false);
                }}
                Header={"Contact Info"}
                Content={
                    <Box sx={{ p: 2 }}>
                        <ContactInfo />
                    </Box>
                }
            /> */}
        </>
    );
};
export default PartnerSideBar;
