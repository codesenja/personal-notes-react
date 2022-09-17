import React, { useState } from "react";
import HeaderSection from "../components/HeaderSection";
import ArchiveSection from "../components/ArchiveSection";
import SearchBar from "../components/NoteSearch/SearchBar";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";

export default function ArchivedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const result = getArchivedNotes();
  const [filterNotes, setFilterNotes] = useState(keyword || "");

  const changeSearchParams = (keyword) => {
    setFilterNotes(keyword);
    setSearchParams({ keyword });
  };

  const resultNotes = result.filter((e) =>
    (e.title || "").toLowerCase().includes(filterNotes.toLowerCase())
  );

  return (
    <>
      <HeaderSection />
      <main>
        <SearchBar
          title="Archive"
          keyword={filterNotes}
          keywordChange={changeSearchParams}
        />
        <ArchiveSection archived={resultNotes} />
      </main>
    </>
  );
}
