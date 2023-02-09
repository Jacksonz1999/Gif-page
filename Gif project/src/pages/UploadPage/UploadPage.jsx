import React from "react";
import videoBack from "../../assets/video/forest-still.mp4";
const UploadPage = () => {
  return (
    <video
      style={{
        display: "flex",
        justifyContent: "center",
        width: "90%",
        height: "100%",
        overflow: "hidden",
      }}
      src={videoBack}
      autoPlay
      loop
      muted
      id="video"
    ></video>
  );
};

export default UploadPage;
