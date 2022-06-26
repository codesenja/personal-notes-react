import React from "react";
import { getInitialData, showFormattedDate } from "../../utils";
import NotesList from "./NotesList";

export default function NotesApp() {
  const notes = getInitialData();
  return (
    <>
      <h2>Catatan Aktif</h2>
      <NotesList notes={notes} />
    </>
  );
}
