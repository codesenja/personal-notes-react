import React from "react";

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
