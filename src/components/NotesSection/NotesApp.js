import React from "react";
import PropTypes from "prop-types";
import NotesList from "./NotesList";

export default function NotesApp({ data }) {
  return (
    <>
      <NotesList notes={data} />
    </>
  );
}

NotesApp.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
