import React from "react";

export default function NotesInput() {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form action="">
        <p className="note-input__title__char-limit"></p>
        <input
          type="text"
          className="note-input__title"
          placeholder="ini adalah judul ..."
          required
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="note-input__body"
          placeholder="tulis catatanmu disini..."
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
