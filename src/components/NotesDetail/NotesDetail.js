import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsArchive } from "react-icons/bs";
import PropTypes from "prop-types";

export default function NotesDetail({ notes, onDelete, onUpdate, onArchived }) {
  const [listItem, setListItem] = useState({
    id: notes.id,
    title: notes.title,
    body: notes.body,
  });

  const handleArchived = () => {
    onArchived(notes.id);
  };

  const handleEdit = () => {
    onUpdate(listItem);
  };

  const handleDelete = () => {
    onDelete(notes.id);
  };

  return (
    <section className="detail-page">
      <div className="add-new-page__input">
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder="ini adalah judul ..."
          onChange={(e) => {
            setListItem({
              ...listItem,
              title: e.target.value,
            });
          }}
          value={listItem.title}
          required
        />
        <textarea
          name="body"
          id="body"
          className="add-new-page__input__body"
          placeholder="tulis catatanmu disini..."
          onChange={(e) => {
            setListItem({
              ...listItem,
              body: e.target.value,
            });
          }}
          value={listItem.body}
        />
        <p className="note-input__title__char-limit"></p>
        <div className="detail-page__action">
          <button
            className="action"
            type="button"
            title="archived"
            onClick={handleArchived}
          >
            <BsArchive />
          </button>
          <button
            className="action"
            type="button"
            title="edit"
            onClick={handleEdit}
          >
            <AiOutlineEdit />
          </button>
          <button
            className="action"
            type="button"
            title="delete"
            onClick={handleDelete}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </section>
  );
}

NotesDetail.propTypes = {
  notes: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onArchived: PropTypes.func.isRequired,
};
