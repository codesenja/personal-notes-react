import React, { useContext } from "react";
import NotesBody from "../NotesSection/NotesBody";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

export default function ArchiveSection({ archived }) {
  const { locale } = useContext(LocaleContext);

  // const result = data.filter((row) => row.archived === true);

  // const onDeleteHandler = (id) => {
  //   const item = data.filter((note) => note.id !== id);
  //   updateData(item);
  // };

  // const onArchiveHandler = (id) => {
  //   const index = data.map((object) => object.id).indexOf(id);
  //   const newListData = [...data];
  //   newListData[index].archived = false;
  //   updateData(newListData);
  // };

  return (
    <>
      <h2>{locale === "en" ? "Archive" : "Arsip"}</h2>
      <div className="notes-list">
        {archived.length === 0 || undefined ? (
          <h3>
            {locale === "en" ? "Notes has been empty" : "Tidak ada catatan"}
          </h3>
        ) : (
          archived.map((note) => (
            <NotesBody key={note.id} id={note.id} {...note} />
          ))
        )}
      </div>
    </>
  );
}

ArchiveSection.propTypes = {
  archived: PropTypes.arrayOf(PropTypes.object).isRequired,
};
