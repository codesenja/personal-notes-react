import React, { useState, useEffect } from "react";
import NotesApp from "../components/NotesSection/NotesApp";
import SearchBar from "../components/NoteSearch/SearchBar";
import { AiOutlinePlus } from "react-icons/ai";
// import { getAllNotes } from "../utils/local-data";
import { getActiveNotes } from "../utils/network-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function LandingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const changeSearchParams = (keyword) => {
    setFilterNotes(keyword);
    setSearchParams({ keyword });
  };

  // const notes = getAllNotes();
  const [notes, setNotes] = useState([]);
  const getDataNotes = async () => {
    const { data } = await getActiveNotes();
    setNotes(data);
  };

  const [filterNotes, setFilterNotes] = useState(keyword || "");

  const navigate = useNavigate();

  const resultNotes = notes.filter((e) =>
    (e.title || "").toLowerCase().includes(filterNotes.toLowerCase())
  );

  useEffect(() => {
    getDataNotes();
  }, []);

  return (
    <>
      <SearchBar
        title="Aktif"
        keyword={filterNotes}
        keywordChange={changeSearchParams}
      />
      <NotesApp data={resultNotes} />

      <div className="homepage__action">
        <button
          className="action"
          type="button"
          title="tambah"
          onClick={() => navigate("/add")}
        >
          <AiOutlinePlus />
        </button>
      </div>

      <ToastContainer autoClose={1500} />
    </>
  );
}
