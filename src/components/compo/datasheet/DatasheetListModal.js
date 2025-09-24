"use client";
import { Button, Typography, Dialog, DialogContent, DialogTitle, Divider, IconButton, Stack, Box } from "@mui/material";
import { Close, Description } from "@mui/icons-material";

const DatasheetListModal = ({ open, onClose, ProductName, Datasheet, name, onClick, loading = false }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: { borderRadius: 2, maxWidth: 450, width: "90%", overflow: "hidden" },
            }}>
            <DialogTitle
                sx={{
                    py: 1,
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    bgcolor: "#1C73BC",
                    color: "white",
                    letterSpacing: 1.2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <span>{name}</span>
                <IconButton aria-label="close" onClick={onClose} sx={{ color: "white" }} size="small">
                    <Close />
                </IconButton>
            </DialogTitle>

            <Typography
                variant="h6"
                sx={{
                    px: 3,
                    py: 2,
                    fontSize: 18,
                }}>
                Select datasheet below for <b>{ProductName}</b>.
            </Typography>

            <Divider />

            <DialogContent sx={{ p: 0 }}>
                <Stack sx={{ overflow: "hidden", p: 2 }} direction="column" spacing={1.5} alignItems="center">
                    {Datasheet.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => onClick(item.ProductDatashet)}
                            variant="contained"
                            disabled={loading}
                            sx={{
                                borderRadius: 5,
                                bgcolor: "#39B54A",
                                color: "white",
                                textTransform: "none",
                                fontWeight: 500,
                                fontSize: "0.8rem",
                                px: 2.5,
                                boxShadow: 2,
                                transition: "all 0.3s ease",
                                width: 250,
                                "&:hover": {
                                    bgcolor: "#2E8B3A",
                                    transform: "scale(1.05)",
                                    boxShadow: 4,
                                },
                            }}
                            startIcon={<Description />}>
                            {/* {item.ProductDatasheetName} */}
                            <Typography
                                noWrap
                                sx={{ textOverflow: "ellipsis", overflow: "hidden", maxWidth: "100%" }}
                            >
                                {item.ProductDatasheetName}
                            </Typography>
                        </Button>
                    ))}
                </Stack>
                <Typography variant="caption" sx={{ display: "block", px: 3, py: 1, color: "text.secondary" }}>
                    <span style={{ color: "red" }}>*</span> Click on a datasheet to download or view more details.
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default DatasheetListModal;
