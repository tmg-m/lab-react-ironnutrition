import React, { useState } from 'react';
function Search({ onSearch }) {
  const [input, setInput] = useState({ name: '' });

  const handleInput = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    onSearch({ [e.target.name]: e.target.value });
  };

  return (
    <input
      name="name"
      type="search"
      value={input.name}
      placeholder="Search for foods"
      onChange={handleInput}
    />
  );
}

export default Search;
