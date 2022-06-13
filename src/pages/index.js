import React, { Component } from "react";

export default class index extends Component {
  componentDidMount() {
    document.title = "My Personal Notes.";
    window.scrollTo(0, 0);
  }
  render() {
    return <div>index</div>;
  }
}
