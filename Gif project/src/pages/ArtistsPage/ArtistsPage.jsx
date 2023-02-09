import React from "react";
import "./ArtistsPage.css";
import Header from "../../components/Header/Header";
import SearchContainer from "../../components/Search/SearchContainer";
import ImageArtists from "../../components/Image/ImageArtists";

const ArtistsPage = () => {
  return (
    <>
      <div className="center_body">
        <div className="full_body">
          <Header />
          <SearchContainer />
          <ImageArtists />
        </div>
      </div>
    </>
  );
};
export default ArtistsPage;
