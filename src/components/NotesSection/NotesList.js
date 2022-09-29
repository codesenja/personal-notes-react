import React, { useContext } from "react";
import NotesBody from "./NotesBody";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

export default function NotesList({ notes }) {
  const { locale } = useContext(LocaleContext);

  const result = notes.filter((row) => row.archived === false);

  return (
    <div className="notes-list">
      {result.length === 0 || undefined ? (
        <h3>
          {locale === "en" ? "Notes has been empty" : "Tidak ada catatan"}
        </h3>
      ) : (
        result.map((note) => <NotesBody key={note.id} id={note.id} {...note} />)
      )}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
