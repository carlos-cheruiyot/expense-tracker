// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      onChange={(e) => onSearch(e.target.value)}
      className="mb-4 p-2 border w-full rounded"
    />
  );
};

export default SearchBar;
