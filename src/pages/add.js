import React, { useState } from "react";
import NotesInput from "../components/NotesInput/NotesInput";
import { getInitialData } from "../utils";

export default function AddPage() {
  const [notes, setNotes] = useState(getInitialData());
  const addNotesHandler = (data) => {
    const newData = {
      id: +new Date(),
      title: data.title,
      body: data.body,
      createdAt: new Date(),
      archived: false,
    };

    setNotes([newData, ...notes]);
  };

  return (
    <div>
      <NotesInput addNotes={addNotesHandler} />
    </div>
  );
}
