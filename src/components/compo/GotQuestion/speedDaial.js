"use client";
import { useState } from "react";
import Link from "next/link";
import { Fab, Button, SpeedDial, SpeedDialAction, Box } from "@mui/material";
import { Close, HeadsetMic, Message, WhatsApp } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import GotQuestion from "./gotquestions";

const CustomSpeedDial = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [speedDialOpen, setSpeedDialOpen] = useState(true);

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: "4%",
                right: "2%",
                zIndex: 1100,
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}>
            <Box
                sx={{
                    display: "flex",
                    mb: isOpen ? -4 : 0,
                    justifyContent: "end",
                    alignItems: "center",
                    gap: 1,
                }}>
                {isOpen ? (
                    <Fab color="primary" aria-label="close" onClick={() => setIsOpen((prev) => !prev)} size="large">
                        <Close />
                    </Fab>
                ) : (
                    <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
                        <Button
                            onClick={() => setSpeedDialOpen((prev) => !prev)}
                            // onMouseEnter={() => setSpeedDialOpen(true)}
                            // onMouseLeave={() => setSpeedDialOpen(false)}
                            variant="text"
                            sx={{
                                p: 0.5,
                                px: 1,
                                border: "1px solid var(--blue)",
                                borderRadius: 10,
                                display: { xs: "none", md: "block" },
                                color: "var(--white)",
                                textTransform: "inherit",
                                mb: 1,
                                backgroundColor: "var(--blue)",
                                position: "relative",
                                ":after": {
                                    content: '""',
                                    position: "absolute",
                                    top: "50%",
                                    right: -3,
                                    transform: "translate(0, -50%) rotate(45deg)",
                                    borderTop: "8px solid var(--blue)",
                                    borderRight: "8px solid var(--blue)",
                                    borderBottom: "8px solid transparent",
                                    borderLeft: "8px solid transparent",
                                    zIndex: -1,
                                },
                            }}>
                            Got a question?
                        </Button>
                        <SpeedDial
                            ariaLabel="Contact Options"
                            // icon={speedDialOpen ? <Close sx={{ fontSize: "calc(1rem + 1vw)" }} /> : <HeadsetMic sx={{ fontSize: "calc(1rem + 1vw)" }} />}
                            icon={ <HeadsetMic sx={{ fontSize: "calc(1rem + 1vw)" }} />}
                            onClose={() => setSpeedDialOpen(false)}
                            onOpen={() => setSpeedDialOpen(true)}
                            open={speedDialOpen}
                        // onClick={() => setSpeedDialOpen((prev) => !prev)}
                        >
                            <SpeedDialAction
                                icon={<WhatsApp sx={{ color: "white" }} />}
                                tooltipTitle="WhatsApp"
                                arrow
                                sx={{
                                    bgcolor: "#39B54A",
                                    ":hover": { bgcolor: "#39B54A" },
                                }}
                                onClick={() => setSpeedDialOpen(false)}
                                component={Link}
                                href="https://wa.link/osxcyc"
                                target="_blank"
                            />
                            <SpeedDialAction
                                icon={<Message sx={{ color: "white" }} />}
                                tooltipTitle="Message"
                                arrow
                                onClick={() => {
                                    setIsOpen((prev) => !prev);
                                    setSpeedDialOpen(false);
                                }}
                                sx={{
                                    bgcolor: "#39B54A",
                                    ":hover": { bgcolor: "#39B54A" },
                                }}
                            />
                        </SpeedDial>
                    </Box>
                )}
            </Box>
            {/* GotQuestion */}
            <AnimatePresence>{isOpen && <GotQuestion isOpen={isOpen} setIsOpen={setIsOpen} />}</AnimatePresence>
        </Box>
    );
};

export default CustomSpeedDial;
