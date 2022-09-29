import React, { useContext } from "react";
import NotesBody from "../NotesSection/NotesBody";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import ThemeContext from "../../contexts/ThemeContext";
import FadeLoader from "react-spinners/FadeLoader";

export default function ArchiveSection({ archived, loading }) {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const override = {
    display: "block",
    margin: "auto",
  };
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
      {loading === true ? (
        <FadeLoader
          color={theme === "dark" ? "#fff" : "#000000"}
          cssOverride={override}
        />
      ) : (
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
      )}
    </>
  );
}

ArchiveSection.propTypes = {
  archived: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
};
