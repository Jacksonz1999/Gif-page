import React from "react";
import "./SearchContainer.css";
import { MdOutlineSearch } from "react-icons/md";

const SearchContainer = () => {
  return (
    <>
      <div className="search_container">
        <input
          type="text"
          placeholder="Search all the GIFs and Stickers"
        ></input>
        <button className="search_button">
          <MdOutlineSearch />
        </button>
      </div>
    </>
  );
};
export default SearchContainer;
