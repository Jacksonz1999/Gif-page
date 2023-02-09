import React from "react";
import "swiper/css";
import "./TrendingGiphy.css";

const TrendingGiphy = ({ giphy }) => {
  return (
    <>
      <div className="trending_giphy" key={giphy.id}>
        <img src={giphy.images.downsized.url} alt={giphy.title} />
      </div>
    </>
  );
};

export default TrendingGiphy;
