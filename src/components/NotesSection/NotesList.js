import React from "react";
import NotesBody from "./NotesBody";

export default function NotesList({ notes }) {
  const result = notes.filter((row) => row.archived === false);

  // const onArchiveHandler = (id) => {
  //   const index = notes.map((object) => object.id).indexOf(id);
  //   const newListData = [...notes];
  //   newListData[index].archived = true;
  //   // updateData(newListData);
  // };

  return (
    <div className="notes-list">
      {result.length === 0 || undefined ? (
        <h3>Tidak ada catatan</h3>
      ) : (
        result.map((note) => <NotesBody key={note.id} {...note} />)
      )}
    </div>
  );
}
