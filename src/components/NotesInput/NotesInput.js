import React, { useState } from "react";

export default function NotesInput(props) {
  const [listItem, setListItem] = useState({
    title: "",
    body: "",
  });

  const [limitValue, setLimitValue] = useState(100);

  const bodyValueHandle = (e) => {
    const limit = 100;

    setLimitValue(limit - e.length);

    setListItem({
      ...listItem,
      body: e.slice(0, limit),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNotes(listItem);
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">
          Sisa Karakter :{limitValue}
        </p>
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
            bodyValueHandle(e.target.value);
          }}
          value={listItem.body}
        ></textarea>

        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
