import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

export default function SearchBar({ title, keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="search-bar">
      <h2>{locale === "en" ? `${title} Note` : `Catatan ${title}`}</h2>
      <input
        type="text"
        placeholder={locale === "en" ? "Search note..." : "cari catatan..."}
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
