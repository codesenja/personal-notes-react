import React from "react";
import HeaderSection from "../components/HeaderSection";
import NotesInput from "../components/NotesInput/NotesInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
export default function AddPage() {
  const navigate = useNavigate();
  const addNotesHandler = (data) => {
    addNote(data);
    navigate("/");
  };

  return (
    <>
      <HeaderSection />
      <main>
        <NotesInput addNotes={addNotesHandler} />
      </main>
    </>
  );
}
