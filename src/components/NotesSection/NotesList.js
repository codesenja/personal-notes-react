import React, { useContext } from "react";
import NotesBody from "./NotesBody";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import ThemeContext from "../../contexts/ThemeContext";
import FadeLoader from "react-spinners/FadeLoader";

export default function NotesList({ notes, loading }) {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const result = notes.filter((row) => row.archived === false);
  const override = {
    display: "block",
    margin: "auto",
  };
  return (
    <>
      {loading === true ? (
        <FadeLoader
          color={theme === "dark" ? "#fff" : "#000000"}
          cssOverride={override}
        />
      ) : (
        <div className="notes-list">
          {result.length === 0 || undefined ? (
            <div className="notes-list">
              <h3>
                {locale === "en" ? "Notes has been empty" : "Tidak ada catatan"}
              </h3>
            </div>
          ) : (
            result.map((note) => (
              <NotesBody
                key={note.id}
                id={note.id}
                loading={loading}
                {...note}
              />
            ))
          )}
        </div>
      )}
    </>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
};
