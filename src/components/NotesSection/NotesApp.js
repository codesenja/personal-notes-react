import React from "react";

import NotesList from "./NotesList";

export default function NotesApp(props) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <NotesList notes={props.data} updateData={props.updateData} />
    </>
  );
}
