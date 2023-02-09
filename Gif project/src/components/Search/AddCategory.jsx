import React, { useState } from "react";
import "./SearchContainer.css";

const AddCategory = ({ setCategory }) => {
  const [value, setValue] = useState();
  const [error, setError] = useState(false);
  const searchGif = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      return;
    }
    setError(false);
    setCategory(value);
    setValue("");
  };
  return (
    <div className="input_search">
      <form onSubmit={searchGif}>
        <input
          className="input_decoration"
          type="text"
          placeholder="Search...🔎"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
      {error ? <p className="error">La busqueda no puede ser vacia</p> : ""}
    </div>
  );
};

export default AddCategory;
