import React from "react";
import PropTypes from "prop-types";

export default function SearchBar({ title, keyword, keywordChange }) {
  return (
    <section className="search-bar">
      <h2>Catatan {title}</h2>
      <input
        type="text"
        placeholder="cari catatan..."
        aria-label="Search"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </section>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
