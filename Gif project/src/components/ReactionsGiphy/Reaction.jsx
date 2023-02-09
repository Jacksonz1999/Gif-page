import React, { useEffect, useState } from "react";
import ReactionImg from "./ReactionsGiphy";
import "./ReactionsGiphy.css";
import { fetchSearchGiphys } from "../../api/giphyapi";

const Reaction = () => {
  const [reaction, setReaction] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getReactionGiphy = async (query, setState) => {
    const searched = await fetchSearchGiphys(query);
    setState(randomizeData(searched.data));
  };
  useEffect(() => {
    getReactionGiphy("reaction", setReaction);
  }, []);
  console.log(reaction, "reaction testing");
  return (
    <>
      <p className="reaction_title">All the Reaction GIFs</p>
      <div className="reaction_container">
        <div className="reaction_gif">
          {reaction?.map((reactionGiphy, index) => {
            return <ReactionImg giphy={reactionGiphy} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Reaction;
