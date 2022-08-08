import React, { useState } from "react";
import { getInitialData, showFormattedDate } from "../../utils";
import NotesList from "./NotesList";

export default function NotesApp() {
  const [notes, setNotes] = useState(getInitialData());
  const onDeleteHandler = (id) => {
    const item = notes.filter((note) => note.id !== id);
    setNotes(item);
  };

  return (
    <>
      <h2>Catatan Aktif</h2>
      <NotesList notes={notes} onDelete={onDeleteHandler} />
    </>
  );
}
