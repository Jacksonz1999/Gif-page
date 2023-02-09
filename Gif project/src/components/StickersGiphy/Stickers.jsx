import React, { useEffect, useState } from "react";
import StickersImg from "./StickersGiphy";
import "./StickersGiphy.css";
import { fetchSearchGiphys } from "../../api/giphyapi";

const Stickers = () => {
  const [stickers, setStickers] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getStickersGiphy = async (query, setState) => {
    const searched = await fetchSearchGiphys(query);
    setState(randomizeData(searched.data));
  };
  useEffect(() => {
    getStickersGiphy("stickers", setStickers);
  }, []);
  console.log(stickers, "stickers testing");
  return (
    <>
      <p className="stickers_title">All the Stickers GIFs</p>
      <div className="stickers_container">
        <div className="stickers_gif">
          {stickers?.map((stickersGiphy, index) => {
            return <StickersImg giphy={stickersGiphy} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Stickers;
