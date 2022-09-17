import React from "react";
import { useParams } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import NotesDetail from "../components/NotesDetail/NotesDetail";
import {
  getNote,
  deleteNote,
  editNote,
  archiveNote,
} from "../utils/local-data";
import { useNavigate } from "react-router-dom";

export default function DetailPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const result = getNote(id);

  const archiveNoteHandler = (data) => {
    archiveNote(data);
    navigate("/");
  };

  const deleteNoteHandler = (data) => {
    deleteNote(data);
    navigate("/");
  };

  const updateNoteHandler = (data) => {
    editNote(data);
    navigate("/");
  };

  return (
    <>
      <HeaderSection />
      <main>
        <NotesDetail
          notes={result}
          onDelete={deleteNoteHandler}
          onUpdate={updateNoteHandler}
          onArchived={archiveNoteHandler}
        />
      </main>
    </>
  );
}
