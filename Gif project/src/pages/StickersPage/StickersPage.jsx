import React from "react";
import "./StickersPage.css";
import Header from "../../components/Header/Header";
import SearchContainer from "../../components/Search/SearchContainer";
import ImageStickers from "../../components/Image/ImageSticker";
import Stickers from "../../components/StickersGiphy/Stickers";

const StickersPage = () => {
  return (
    <>
      <div className="center_body">
        <div className="full_body">
          <Header />
          <SearchContainer />
          <ImageStickers />

          <Stickers />
        </div>
      </div>
    </>
  );
};

export default StickersPage;
