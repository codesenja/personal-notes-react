import React, { Component } from "react";

export default class NotesInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        description: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit"></p>
          <input
            type="text"
            className="note-input__title"
            placeholder="ini adalah judul ..."
            value={this.state.name}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="note-input__body"
            value={this.state.tag}
            onChange={this.onBodyChangeEventHandler}
            placeholder="tulis catatanmu disini..."
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
