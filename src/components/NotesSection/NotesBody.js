import React from "react";
import { showFormattedDate } from "../../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NotesBody({ id, title, createdAt, body }) {
  console.log(id);
  return (
    <>
      <div className="note-item">
        <div className="note-item__content">
          <h2 className="note-item__title">
            <Link to={`detail/${id}`}>{title}</Link>
          </h2>

          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
        </div>
      </div>
    </>
  );
}

NotesBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
