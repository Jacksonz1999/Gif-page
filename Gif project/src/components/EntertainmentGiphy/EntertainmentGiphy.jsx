import React from "react";
import "./EntertainmentGiphy.css";
const EntertainmentGiphy = ({ giphy }) => {
  return (
    <div>
      <img
        className="entertainment_img"
        src={giphy.images.downsized.url}
        alt={giphy.title}
      />
      <p className="entertainment_text">{giphy.title}</p>
    </div>
  );
};
export default EntertainmentGiphy;
