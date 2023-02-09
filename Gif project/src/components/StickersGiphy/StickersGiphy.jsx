import React from "react";
import "./StickersGiphy";
const StickersGiphy = ({ giphy }) => {
  return (
    <div>
      <img
        className="stickers_img"
        src={giphy.images.downsized.url}
        alt={giphy.title}
      />
      <p className="stickers_text">{giphy.title}</p>
    </div>
  );
};
export default StickersGiphy;
