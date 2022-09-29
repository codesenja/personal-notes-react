import React from "react";
import PropTypes from "prop-types";
import NotesList from "./NotesList";

export default function NotesApp({ data, loading }) {
  return (
    <>
      <NotesList notes={data} loading={loading} />
    </>
  );
}

NotesApp.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
};
