import React from 'react';

const SearchBar = ({ search, setSearch }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
    <button>SEARCH</button>
  </div>
);

export default SearchBar;