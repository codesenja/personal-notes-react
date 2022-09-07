<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { useState } from "react";
>>>>>>> 616814a73211cddc53ef16721b58a5f9933e618b
import ArchiveSection from "../components/ArchiveSection";
import HeaderSection from "../components/HeaderSection";
import NotesInput from "../components/NotesInput/NotesInput";
import NotesApp from "../components/NotesSection/NotesApp";
<<<<<<< HEAD
export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "My Personal Notes.";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        {/* <HeaderSection /> */}
        <HeaderSection />
        <div className="note-app__body">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <NotesApp />
          <ArchiveSection />
        </div>
      </>
    );
  }
=======

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
      createdAt: new Date(),
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
>>>>>>> 616814a73211cddc53ef16721b58a5f9933e618b
}
