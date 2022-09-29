/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Fouronfour from "../pages/404";
import NotesDetail from "../components/NotesDetail/NotesDetail";
// import {
//   getNote,
//   deleteNote,
//   editNote,
//   archiveNote,
//   unarchiveNote,
// } from "../utils/local-data";
import {
  deleteNote,
  unarchiveNote,
  archiveNote,
  getNote,
} from "../utils/network-data";

import { useNavigate } from "react-router-dom";

export default function DetailPage() {
  const navigate = useNavigate();
  const init_value = {
    id: "",
    title: "",
    body: "",
    createdAt: "",
    archived: false,
    owner: "",
  };
  const { id } = useParams();
  const updateData = () => {
    getNoteById(id);
  };
  const [result, setResult] = useState(init_value);
  const [isloading, setIsLoading] = useState(false);

  const getNoteById = async (idData) => {
    setIsLoading(true);
    const { data } = await getNote(idData);
    setResult(data);
    setIsLoading(false);
  };

  const archiveNoteHandler = async (data) => {
    await archiveNote(data);
    navigate("/");
  };

  const unarchiveNoteHandler = async (data) => {
    await unarchiveNote(data);
    navigate("/");
  };

  const deleteNoteHandler = async (data) => {
    await deleteNote(data);

    navigate("/");
  };

  // const updateNoteHandler = async (data) => {
  //   editNote(data);
  //   navigate("/");
  // };

  useEffect(() => {
    updateData();
  }, [id]);

  if (result === null) {
    return (
      <section>
        <h2>Data Tidak Ditemukan</h2>
      </section>
    );
  }

  return (
    <>
      {result === undefined ? (
        <Fouronfour />
      ) : (
        <NotesDetail
          notes={result}
          loading={isloading}
          onDelete={deleteNoteHandler}
          // onUpdate={updateNoteHandler}
          onArchived={archiveNoteHandler}
          onUnArchived={unarchiveNoteHandler}
        />
      )}
    </>
  );
}
