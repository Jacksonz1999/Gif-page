import React from "react";
import Header from "../../components/Header/Header";
import Media from "../../components/Media/Media";
import Search from "../../components/Search/SearchContainer";
import Image from "../../components/Image/ImageHeader";
function Homepage() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Search />
        <Image />
        <Media />
      </div>
    </div>
  );
}
export default Homepage;
