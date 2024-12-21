import { CardActionArea } from "@mui/material";

const CustomImage = (props) => {
    return (
       <CardActionArea sx={{height:'100%',width:"100%"}}>
         <img
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            style={props.style}
            className={props.className}
            title={props.title}
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
            onMouseDown={props.onMouseDown}
        />
       </CardActionArea>
    )
}
export default CustomImage;