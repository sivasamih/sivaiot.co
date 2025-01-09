import * as APIURLS from "@/apis/apiconstant";

const NewIcon = (props) => {
  const IconURL = props.Icon || APIURLS.BASE_PATH.Others + "new_icon.gif";
  return (
    <img
      src={IconURL}
      style={{ margin: "0 0 0 5px" }}
    />
  );
};
export default NewIcon;
