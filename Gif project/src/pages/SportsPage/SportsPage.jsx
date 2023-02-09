import React from "react";
import "./SportsPage.css";
import Header from "../../components/Header/Header";
import SearchContainer from "../../components/Search/SearchContainer";
import Sports from "../../components/SportsGiphy/Sports";
const SportsPage = () => {
  return (
    <>
      <div className="center_body">
        <div className="full_body">
          <Header />
          <SearchContainer />
          <Sports />
        </div>
      </div>
    </>
  );
};

export default SportsPage;
