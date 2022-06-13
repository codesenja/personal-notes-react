import React from "react";
import { getInitialData } from "../../utils";
import NotesList from "./NotesList";

export default function NotesApp() {
  const notes = getInitialData();
  console.log(getInitialData);
  return (
    <div className="notes-list__body">
      <h2>Catatan Aktif</h2>
      <NotesList notes={notes} />
    </div>
  );
}
