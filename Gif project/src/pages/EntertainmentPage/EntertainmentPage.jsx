import React from "react";
import SearchContainer from "../../components/Search/SearchContainer";
import Header from "../../components/Header/Header";
import "./EntertainmentPage.css";
import Entertainment from "../../components/EntertainmentGiphy/Entertainment";

const EntertainmentPage = () => {
  return (
    <div className="center_body">
      <div className="full_body">
        <Header />
        <SearchContainer />
        <Entertainment />
      </div>
    </div>
  );
};

export default EntertainmentPage;
