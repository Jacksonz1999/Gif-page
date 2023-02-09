import React from "react";
import useApiSearch from "../../api/useApiSearch";
import ImageItem from "./ImageItem";
import "./SearchContainer.css";
const DisplayGif = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=UBwZnmlk5k3JjjJrRoG6Wu8lUsXDRZmw&q=${category}&limit=12`;
  const { loading, data } = useApiSearch(url);

  return (
    <div className="parent_container">
      <div className="container-gifs">
        {loading
          ? data.map((img) => (
              <ImageItem
                className="image_item"
                key={img.id}
                title={img.title}
                url={img.images.downsized_medium.url}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default DisplayGif;
