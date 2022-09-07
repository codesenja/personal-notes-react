<<<<<<< HEAD
import React, { Component } from "react";
import { getInitialData, showFormattedDate } from "../../utils";
import NotesList from "./NotesList";

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((contact) => contact.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </>
    );
  }
=======
import React from "react";

import NotesList from "./NotesList";

export default function NotesApp(props) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <NotesList notes={props.data} updateData={props.updateData} />
    </>
  );
>>>>>>> 616814a73211cddc53ef16721b58a5f9933e618b
}
