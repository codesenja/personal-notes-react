import React from "react";

import NotesList from "./NotesList";

export default function NotesApp(props) {
  return (
    <>
      <NotesList notes={props.data} />
    </>
  );
}
