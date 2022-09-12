import React, { useState } from "react";
import ArchiveSection from "../components/ArchiveSection";
import HeaderSection from "../components/HeaderSection";

import NotesApp from "../components/NotesSection/NotesApp";
import { AiOutlinePlus } from "react-icons/ai";
import { getInitialData } from "../utils";
export default function LandingPage() {
  const [notes, setNotes] = useState(getInitialData());
  const [filterNotes, setFilterNotes] = useState("");

  const resultNotes = notes.filter((e) =>
    (e.title || "").toLowerCase().includes(filterNotes.toLowerCase())
  );

  return (
    <>
      {/* <HeaderSection /> */}
      <HeaderSection />
      <main>
        <section class="search-bar">
          <h2>Catatan Aktif</h2>
          <input
            type="text"
            placeholder="cari catatan..."
            aria-label="Search"
            onChange={(e) => setFilterNotes(e.target.value)}
          />
        </section>

        <NotesApp data={resultNotes} updateData={setNotes} />
        {/* <ArchiveSection data={resultNotes} updateData={setNotes} /> */}

        <div className="homepage__action">
          <button className="action" type="button" title="tambah">
            <AiOutlinePlus />
          </button>
        </div>
      </main>
    </>
  );
}
