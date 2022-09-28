import React, { useState, useEffect } from "react";
import ArchiveSection from "../components/ArchiveSection";
import SearchBar from "../components/NoteSearch/SearchBar";
// import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/network-data";

export default function ArchivedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  // const result = getArchivedNotes();
  const [archived, setArchived] = useState([]);
  const getDataArchived = async () => {
    const { data } = await getArchivedNotes();
    setArchived(data);
  };
  const [filterNotes, setFilterNotes] = useState(keyword || "");

  const changeSearchParams = (keyword) => {
    setFilterNotes(keyword);
    setSearchParams({ keyword });
  };

  const resultNotes = archived.filter((e) =>
    (e.title || "").toLowerCase().includes(filterNotes.toLowerCase())
  );

  useEffect(() => {
    getDataArchived();
  }, []);

  return (
    <>
      <SearchBar
        title="Archive"
        keyword={filterNotes}
        keywordChange={changeSearchParams}
      />
      <ArchiveSection archived={resultNotes} />
    </>
  );
}
