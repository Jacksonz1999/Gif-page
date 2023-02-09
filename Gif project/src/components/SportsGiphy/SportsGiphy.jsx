import React from "react";
import "./SportsGiphy";
const SportsGiphy = ({ giphy }) => {
  return (
    <div>
      <img
        className="sports_img"
        src={giphy.images.downsized.url}
        alt={giphy.title}
      />
      <p className="sports_text">{giphy.title}</p>
    </div>
  );
};
export default SportsGiphy;
