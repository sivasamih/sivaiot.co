import { Typography } from "@mui/material"

const Paragraph1 = (props) => {
    return (
        <>
            {props.children ? <Typography sx={props.sx} variant={props.variant} component={props.component} onClick={props.onClick}>{props.children}</Typography> : null}
        </>
    )
}
export default Paragraph1;