import React from "react";
import NotesBody from "./NotesBody";
import PropTypes from "prop-types";

export default function NotesList({ notes }) {
  const result = notes.filter((row) => row.archived === false);

  return (
    <div className="notes-list">
      {result.length === 0 || undefined ? (
        <h3>Tidak ada catatan</h3>
      ) : (
        result.map((note) => <NotesBody key={note.id} id={note.id} {...note} />)
      )}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
