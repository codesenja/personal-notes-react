import React from "react";
import ArchiveSection from "../components/ArchiveSection";
import HeaderSection from "../components/HeaderSection";
import NotesInput from "../components/NotesInput/NotesInput";
import NotesApp from "../components/NotesSection/NotesApp";
export default function LandingPage() {
  const addNotesHandler = ({ value }) => {
    console.log(value);
  };

  return (
    <>
      {/* <HeaderSection /> */}
      <HeaderSection />
      <div className="note-app__body">
        <NotesInput />
        <NotesApp />
        <ArchiveSection />
      </div>
    </>
  );
}
