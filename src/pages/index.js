import React, { useState } from "react";
import ArchiveSection from "../components/ArchiveSection";
import HeaderSection from "../components/HeaderSection";
import NotesInput from "../components/NotesInput/NotesInput";
import NotesApp from "../components/NotesSection/NotesApp";

import { getInitialData } from "../utils";
export default function LandingPage() {
  const [notes, setNotes] = useState(getInitialData());
  const [filterNotes, setFilterNotes] = useState("");

  const resultNotes = notes.filter((e) =>
    (e.title || "").toLowerCase().includes(filterNotes.toLowerCase())
  );

  const addNotesHandler = (data) => {
    const newData = {
      id: +new Date(),
      title: data.title,
      body: data.body,
      createdAt: new Date().toString("yyyy-MM-dd"),
      archived: false,
    };

    setNotes([newData, ...notes]);
  };

  return (
    <>
      {/* <HeaderSection /> */}
      <HeaderSection pencarianData={(e) => setFilterNotes(e.target.value)} />
      <div className="note-app__body">
        <NotesInput addNotes={addNotesHandler} />
        <NotesApp data={resultNotes} updateData={setNotes} />
        <ArchiveSection data={resultNotes} updateData={setNotes} />
      </div>
    </>
  );
}
