import React from "react";
function Search({ onSearch }) {

  const handleInput = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      name="name"
      type="search"
      placeholder="Search for foods"
      onChange={handleInput}
    />
  );
}

export default Search;
