import React from "react";
import NotesBody from "./NotesBody";

export default function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesBody key={note.id} {...note} />
      ))}
    </div>
  );
}
