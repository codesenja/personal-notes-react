import React, { Component } from "react";
import ArchiveSection from "../components/ArchiveSection";
import HeaderSection from "../components/HeaderSection";
import NotesInput from "../components/NotesInput/NotesInput";
import NotesApp from "../components/NotesSection/NotesApp";
export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "My Personal Notes.";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        {/* <HeaderSection /> */}
        <HeaderSection />
        <div className="note-app__body">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <NotesApp />
          <ArchiveSection />
        </div>
      </>
    );
  }
}
