import React from "react";
import Header from "../../components/Header/Header";
import SearchContainer from "../../components/Search/SearchContainer";
import UploadImage from "../../components/UploadImage/UploadImage";

const UploadPage = () => {
  return (
    <div className="center_body">
      <div className="full_body">
        <Header />
        <SearchContainer />
        <UploadImage />
      </div>
    </div>
  );
};

export default UploadPage;
