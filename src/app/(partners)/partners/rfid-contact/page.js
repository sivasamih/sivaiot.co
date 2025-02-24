import ContactInfo from "@/components/compo/contactus/contactinfo";
import { Box, Container, Typography } from "@mui/material";


const RFIDContact = () => {
    return (
        <>
            <Box sx={{ bgcolor: "#F2F4F7" }}>
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        fontSize: "calc(1.2rem + 1vw)",
                        py: 4,
                        letterSpacing: 1,
                        color: "var(--headerColor)",
                    }}
                >
                    Contact us
                </Typography>
            </Box>
            <Box sx={{ px: 5, mt: 5 }}>
                <ContactInfo />
            </Box>
        </>
    )
}
export default RFIDContact;