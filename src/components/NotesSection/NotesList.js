import React from "react";
import NotesBody from "./NotesBody";

export default function NotesList({ notes }) {
  return (
    <div className="notes-list">
      <NotesBody />
      {/* {notes.map((note) => {
        <NotesBody />;
      })} */}
    </div>
  );
}
