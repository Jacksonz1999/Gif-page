import React from "react";
import { useState } from "react";
import AddCategory from "../../components/Search/AddCategory";
import DisplayGif from "../../components/Search/DisplayGif";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const SearchPage = () => {
  const [category, setCategory] = useState("");
  return (
    <>
      <Link to="/">
        <BsArrowReturnLeft
          style={{
            marginLeft: "100px",
            marginTop: "50px",
            width: "400px",
            color: "white",
          }}
        />
      </Link>
      <AddCategory setCategory={setCategory} />
      <DisplayGif category={category} />
    </>
  );
};

export default SearchPage;
