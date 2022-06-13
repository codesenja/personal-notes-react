import React, { Component } from "react";
import HeaderSection from "../components/HeaderSection";
import NotesApp from "../components/NotesSection/NotesList";
export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "My Personal Notes.";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <HeaderSection />
        <NotesApp />
      </>
    );
  }
}
