"use client";
import { Avatar, Box, Divider, List, Paper, Stack, Typography } from "@mui/material";
import CustomListButton from "@/components/customcompo/button/customListButton";
import { PartnerSideBarButtonList } from "@/helper/helper";
import { useLoginData } from "@/contextapi/loginuserprovider";

const PartnerSideBar = () => {
    const IOT_PU = useLoginData();
    const userName = IOT_PU?.UserName || "Guest";
    const userInitials = userName.split(" ").map((n) => n[0]).join("").toUpperCase();


    return (
        <>
            {/* <Box sx={{ p: 1, pb: 1 }}>
                <Paper
                    elevation={2}
                    sx={{
                        p: 1,
                        px: 2,
                        borderRadius: 3,
                        backgroundColor: 'var(--green)',
                        color: 'white',
                        maxWidth: 400,
                        mx: 'auto',
                        transition: 'transform 0.3s',
                    }}
                >
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar
                            sx={{
                                width: 40,
                                height: 40,
                                bgcolor: 'rgba(255, 255, 255, 0.3)',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >
                            {userInitials}
                        </Avatar>
                        <Box >

                            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: 'calc(0.1rem + 1vw)', letterSpacing: 2 }}>
                                Welcome
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{ letterSpacing: 1 }}>
                                {userName}
                            </Typography>
                        </Box>

                    </Stack>
                </Paper>
            </Box>
            <Divider /> */}
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
