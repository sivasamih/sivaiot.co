const TitleIcons = (props) => {
  return (
    <img
      src={props.Icon}
      alt={props.alt || "icon"}
      style={{
        width: "30px",
        height: "30px",
        transition: "height 0.5s ease-in-out",
        verticalAlign: "bottom",
        margin: "0 0 0 5px",
        border: "none",
      }}
    />
  );
};

export default TitleIcons;
