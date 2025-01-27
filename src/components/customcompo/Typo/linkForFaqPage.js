import { Typography } from "@mui/material";
import Link from "next/link";

const LinkForFAQPage = ({ title, url }) => {
    if (!title && !url) return null
    return (
        <Typography
            component={Link}
            href={url}
            title="Cintura Loop-Tag"
            target="_blank"
            style={{
                textDecoration: "none",
                color: "var(--green)",
            }}
            sx={{
                fontSize: {
                    xs: "calc(0.8em + 1vw)",
                    md: "calc(0.2em + 1vw)",
                },
                lineHeight: 1,
                mx: .5
            }}>
            {title}
        </Typography>
    )
}
export default LinkForFAQPage;