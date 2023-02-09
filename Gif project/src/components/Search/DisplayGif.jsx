import React from "react";
import useApiSearch from "../../api/useApiSearch";
import ImageItem from "./ImageItem";
const DisplayGif = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=UBwZnmlk5k3JjjJrRoG6Wu8lUsXDRZmw&q=${category}&limit=5`;
  const { loading, data } = useApiSearch(url);

  return (
    <div className="container-gifs">
      <h2>Display gif</h2>
      {loading
        ? data.map((img) => (
            <ImageItem
              key={img.id}
              title={img.title}
              url={img.images.downsized_medium.url}
            />
          ))
        : ""}
    </div>
  );
};

export default DisplayGif;
