import React from "react";
import { useState } from "react";
import AddCategory from "../../components/Search/AddCategory";
import DisplayGif from "../../components/Search/DisplayGif";

const SearchPage = () => {
  const [category, setCategory] = useState("");
  return (
    <>
      <AddCategory setCategory={setCategory} />
      <DisplayGif category={category} />
    </>
  );
};

export default SearchPage;
