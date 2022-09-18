import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function NotesInput({ addNotes }) {
  const [listItem, setListItem] = useState({
    title: "",
    body: "",
  });

  const [limitValue, setLimitValue] = useState(100);

  const bodyValueHandle = (e) => {
    const limit = 100;

    setLimitValue(limit - e.length + 1);

    setListItem({
      ...listItem,
      body: e.slice(0, limit),
    });
  };

  const handleSubmit = () => {
    toast("Catatanmu Berhasil ditambahkan");
    addNotes(listItem);
  };

  return (
    <section className="add-new-page">
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
            bodyValueHandle(e.target.value);
          }}
          value={listItem.body}
        />
        <p className="note-input__title__char-limit">
          Sisa Karakter :{limitValue}
        </p>
        <div className="homepage__action">
          <button
            className="action"
            type="button"
            title="tambah"
            onClick={handleSubmit}
          >
            <AiOutlineCheck />
          </button>
        </div>
      </div>
    </section>
  );
}

NotesInput.propTypes = {
  addNotes: PropTypes.func.isRequired,
};
