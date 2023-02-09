import React from "react";
import Header from "../../components/Header/Header";
import SearchContainer from "../../components/Search/SearchContainer";
import Reaction from "../../components/ReactionsGiphy/Reaction";
import "./ReactionsPage.css";
const ReactionsPage = () => {
  return (
    <div className="center_body">
      <div className="full_body">
        <Header />
        <SearchContainer />
        <Reaction />
      </div>
    </div>
  );
};

export default ReactionsPage;
