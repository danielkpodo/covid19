import React from "react";

const SearchBox = (props) => {
  const { countries, onFilter } = props;
  return (
    <div className="searchbox z-depth-3">
      <div className="input-field">
        <input
          type="text"
          placeholder="Start typing a country..."
          className="white-text search"
          onChange={onFilter}
        />
      </div>
      <p>Currently displaying data for {countries.length} affected countries</p>
    </div>
  );
};

export default SearchBox;
