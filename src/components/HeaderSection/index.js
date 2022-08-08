import React from "react";

export default function HeaderSection({ pencarianData }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="cari catatan..."
          aria-label="Search"
          onChange={pencarianData}
        />
      </div>
    </div>
  );
}
