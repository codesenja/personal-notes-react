import React, { useState } from "react";

export default function NotesInput(props) {
  const [listItem, setListItem] = useState({
    id: +0,
    title: "",
    body: "",
    createdAt: new Date(),
    archived: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNotes(listItem);
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit"></p>
        <input
          type="text"
          className="note-input__title"
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
          cols="30"
          rows="10"
          className="note-input__body"
          placeholder="tulis catatanmu disini..."
          onChange={(e) => {
            setListItem({
              ...listItem,
              body: e.target.value,
            });
          }}
          value={listItem.body}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
