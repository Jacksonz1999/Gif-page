import React from "react";
import "./ReactionsGiphy";
const ReactionsGiphy = ({ giphy }) => {
  return (
    <div>
      <img
        className="reaction_img"
        src={giphy.images.downsized.url}
        alt={giphy.title}
      />
      <p className="reaction_text">{giphy.title}</p>
    </div>
  );
};
export default ReactionsGiphy;
