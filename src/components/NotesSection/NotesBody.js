import React from "react";

export default function NotesBody(props) {
  return (
    <>
      <div className="note-item">
        <div className="note-item__content">
          <div className="note-item__title">
            <h2>{props.title}</h2>
          </div>
          <p className="note-item__date">{props.createdAt}</p>
          <p className="note-item__body">{props.body}</p>
        </div>
        <div className="note-item__action">
          <button
            className="note-item__delete-button"
            onClick={() => props.deleteNotes(props.id)}
          >
            Delete
          </button>
          <button
            className="note-item__archive-button"
            onClick={() => props.archiveNotes(props.id)}
          >
            {props.archived === false ? "Arsipkan" : "Pindahkan"}
          </button>
        </div>
      </div>
    </>
  );
}
