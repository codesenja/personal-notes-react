import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";

export default function NotesDetail({
  notes,
  loading,
  onDelete,
  // onUpdate,
  onArchived,
  onUnArchived,
}) {
  const handleArchived = () => {
    toast("Catatanmu Berhasil di arsip");
    onArchived(notes.id);
  };

  const handleUnArchived = () => {
    toast("Catatanmu Berhasil tidak di arsip");
    onUnArchived(notes.id);
  };

  // const handleEdit = () => {
  //   toast("Catatanmu Berhasil diedit");
  //   onUpdate(listItem);
  // };

  const handleDelete = () => {
    window.confirm("Apakah mau menghapus catatan ini") && onDelete(notes.id);
    toast("Catatanmu Berhasil dihapus");
  };

  return (
    <section className="detail-page">
      <div className="add-new-page__input">
        <h3 className="detail-page__title">
          {loading === true ? <Skeleton /> : notes.title}
        </h3>
        <p className="detail-page__createdAt">
          {loading === true ? <Skeleton /> : notes.createdAt}
        </p>
        <div className="detail-page__body">
          {loading === true ? <Skeleton /> : notes.body}
        </div>
        {/* <input
          type="text"
          className="add-new-page__input__title"
          placeholder="ini adalah judul ..."
          // onChange={(e) => {
          //   setListItem({
          //     ...listItem,
          //     title: e.target.value,
          //   });
          // }}
          defaultValue={notes.title}
          required
        /> */}

        {/* <textarea
          name="body"
          id="body"
          className="add-new-page__input__body"
          placeholder="tulis catatanmu disini..."
          // onChange={(e) => {
          //   setListItem({
          //     ...listItem,
          //     body: e.target.value,
          //   });
          // }}
          defaultValue={notes.body}
        /> */}
        <p className="note-input__title__char-limit"></p>
        <div className="detail-page__action">
          {notes.archived === true ? (
            <>
              <button
                className="action"
                type="button"
                title="archived"
                onClick={handleUnArchived}
              >
                <BiArchiveOut />
              </button>
            </>
          ) : (
            <>
              <button
                className="action"
                type="button"
                title="archived"
                onClick={handleArchived}
              >
                <BiArchiveIn />
              </button>
            </>
          )}

          {/* <button
            className="action"
            type="button"
            title="edit"
            onClick={handleEdit}
          >
            <AiOutlineEdit />
          </button> */}
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
  // onUpdate: PropTypes.func.isRequired,
  onArchived: PropTypes.func.isRequired,
  onUnArchived: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
