import React from "react";
import "./SearchContainer.css";
const ImageItem = ({ title, url }) => {
  return (
    <>
      <div>
        <img style={{ width: "200px" }} src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};

export default ImageItem;
