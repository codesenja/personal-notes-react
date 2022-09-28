import React from "react";
import NotesInput from "../components/NotesInput/NotesInput";
// import { addNote } from "../utils/local-data";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  const navigate = useNavigate();

  const addNotesHandler = async (data) => {
    await addNote(data);
    navigate("/");
  };

  return (
    <>
      <NotesInput addNotes={addNotesHandler} />
    </>
  );
}
