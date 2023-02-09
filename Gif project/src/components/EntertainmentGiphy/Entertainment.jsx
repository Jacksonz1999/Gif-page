import React, { useEffect, useState } from "react";
import EntertainmentImg from "./EntertainmentGiphy";
import "./EntertainmentGiphy.css";
import { fetchSearchGiphys } from "../../api/giphyapi";

const Entertainment = () => {
  const [entertainment, setEntertainment] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getEntertainmentGiphy = async (query, setState) => {
    const searched = await fetchSearchGiphys(query);
    setState(randomizeData(searched.data));
  };
  useEffect(() => {
    getEntertainmentGiphy("entertainment", setEntertainment);
  }, []);
  console.log(entertainment, "Entertainment testing");
  return (
    <>
      <p className="entertainment_title">All the Entertainment GIFs</p>
      <div className="entertainment_container">
        <div className="entertainment_gif">
          {entertainment?.map((entertainmentGiphy, index) => {
            return <EntertainmentImg giphy={entertainmentGiphy} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Entertainment;
