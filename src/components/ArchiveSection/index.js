import React from "react";
import NotesBody from "../NotesSection/NotesBody";

export default function ArchiveSection({ archived }) {
  // const result = data.filter((row) => row.archived === true);

  // const onDeleteHandler = (id) => {
  //   const item = data.filter((note) => note.id !== id);
  //   updateData(item);
  // };

  // const onArchiveHandler = (id) => {
  //   const index = data.map((object) => object.id).indexOf(id);
  //   const newListData = [...data];
  //   newListData[index].archived = false;
  //   updateData(newListData);
  // };

  return (
    <>
      <h2>Arsip</h2>
      <div className="notes-list">
        {archived.length === 0 || undefined ? (
          <h3>Tidak ada catatan</h3>
        ) : (
          archived.map((note) => <NotesBody key={note.id} {...note} />)
        )}
      </div>
    </>
  );
}
