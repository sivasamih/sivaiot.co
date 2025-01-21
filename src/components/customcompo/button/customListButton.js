import { StyledListButton } from "@/components/Customstyled/customStyledt";
import { ListItemText } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const CustomListButton = ({ url, title }) => {
    const PathName = usePathname();
    const router = useRouter()

    return (
        <StyledListButton
            currentpath={PathName}
            url={url}
            onClick={() => {
                router.push(url);
            }}>
            <ListItemText primary={title} />
        </StyledListButton>
    )
}
export default CustomListButton