import React from "react";
import { showFormattedDate } from "../../utils";
import { Link } from "react-router-dom";

export default function NotesBody(props) {
  return (
    <>
      <div className="note-item">
        <div className="note-item__content">
          <h2 className="note-item__title">
            <Link to={`detail/notes-${props.id}`}>{props.title}</Link>
          </h2>

          <p className="note-item__date">
            {showFormattedDate(props.createdAt)}
          </p>
          <p className="note-item__body">{props.body}</p>
        </div>
        {/* <div className="note-item__action">
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
        </div> */}
      </div>
    </>
  );
}
