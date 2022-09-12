import React, { useState } from "react";
import HeaderSection from "../components/HeaderSection";
import NotesApp from "../components/NotesSection/NotesApp";
import { AiOutlinePlus } from "react-icons/ai";
import { getInitialData } from "../utils";
import { useNavigate, useLocation } from "react-router-dom";
export default function LandingPage() {
  const [notes, setNotes] = useState(getInitialData());

  const [filterNotes, setFilterNotes] = useState("");

  const navigate = useNavigate();
  const resultNotes = notes.filter((e) =>
    (e.title || "").toLowerCase().includes(filterNotes.toLowerCase())
  );

  // const { state: { infoId } = {} } = useLocation();

  return (
    <>
      <HeaderSection />
      <main>
        <section className="search-bar">
          <h2>Catatan Aktif</h2>
          <input
            type="text"
            placeholder="cari catatan..."
            aria-label="Search"
            onChange={(e) => setFilterNotes(e.target.value)}
          />
        </section>

        <NotesApp data={resultNotes} updateData={setNotes} />

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
      </main>
    </>
  );
}
