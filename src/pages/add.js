import React from "react";
import HeaderSection from "../components/HeaderSection";
import NotesInput from "../components/NotesInput/NotesInput";
import { useNavigate } from "react-router-dom";
export default function AddPage() {
  const navigate = useNavigate();
  const addNotesHandler = (data) => {
    const newData = {
      id: `notes-${+new Date()}`,
      title: data.title,
      body: data.body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    console.log(newData);
    navigate("/", { state: { newData } });
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
