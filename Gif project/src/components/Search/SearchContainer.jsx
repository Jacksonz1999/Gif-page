import React from "react";
import "./SearchContainer.css";
import { Link } from "react-router-dom";

const SearchContainer = () => {
  return (
    <>
      <div className="search_container">
        <Link to="/Search">
          <input
            className="search_input"
            type="text"
            placeholder="Search all the GIFs and Stickers"
          ></input>
        </Link>
      </div>
    </>
  );
};
export default SearchContainer;
