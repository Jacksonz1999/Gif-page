import React, { useEffect, useState } from "react";
import SportsImg from "./SportsGiphy";
import "./SportsGiphy.css";
import { fetchSearchGiphys } from "../../api/giphyapi";

const Sports = () => {
  const [sports, setSports] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getSportsGiphy = async (query, setState) => {
    const searched = await fetchSearchGiphys(query);
    setState(randomizeData(searched.data));
  };
  useEffect(() => {
    getSportsGiphy("sports", setSports);
  }, []);
  console.log(sports, "sports testing");
  return (
    <>
      <p className="sports_title">All the Sports GIFs</p>
      <div className="sports_container">
        <div className="sports_gif">
          {sports?.map((sportsGiphy, index) => {
            return <SportsImg giphy={sportsGiphy} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sports;
