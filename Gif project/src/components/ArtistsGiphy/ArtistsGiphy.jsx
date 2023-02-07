import React from "react";
import "./ArtistsGiphy.css";
const ArtistsGiphy = ({ giphy }) => {
  return (
    <>
      <div className="artists_giphy" key={giphy.id}>
        <img src={giphy.images.downsized.url} alt={giphy.title}></img>
      </div>
    </>
  );
};

export default ArtistsGiphy;
