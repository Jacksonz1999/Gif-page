import React from "react";
import "./StoriesGiphy.css";

const StoriesGiphy = ({ giphyArray }) => {
  const getGiphy = () => {
    let randomIndex = Math.floor(Math.random() * 31) + 0;
    let randomGiphy = giphyArray[randomIndex];

    if (randomGiphy) {
      return randomGiphy;
    }
  };

  const GiphyTile = ({ giphy }) => {
    let giphyURL = giphy ? giphy.images.downsized.url : null;
    /*   console.log(giphyURL); */
    return (
      <div className="title">
        <div className="giphy_title">
          <p className="stories_title">{giphy?.title}</p>
          <img className="stories_image" src={giphyURL} />
        </div>
      </div>
    );
  };

  return (
    <div className="stories_section">
      <div className="landscape-left-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="landscape-right-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="no-landscape-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="landscape-middle-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="no-landscape-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
    </div>
  );
};

export default StoriesGiphy;
