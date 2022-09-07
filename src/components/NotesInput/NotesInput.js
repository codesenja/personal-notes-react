import React, { Component } from "react";

<<<<<<< HEAD
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
=======
export default function NotesInput(props) {
  const [listItem, setListItem] = useState({
    title: "",
    body: "",
  });

  const [limitValue, setLimitValue] = useState(100);

  const bodyValueHandle = (e) => {
    const limit = 100;

    setLimitValue(limit - e.length);

    setListItem({
      ...listItem,
      body: e.slice(0, limit),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNotes(listItem);
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">
          Sisa Karakter :{limitValue}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="ini adalah judul ..."
          onChange={(e) => {
            setListItem({
              ...listItem,
              title: e.target.value,
            });
          }}
          value={listItem.title}
          required
        />
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          className="note-input__body"
          placeholder="tulis catatanmu disini..."
          onChange={(e) => {
            bodyValueHandle(e.target.value);
          }}
          value={listItem.body}
        ></textarea>

        <button type="submit">Buat</button>
      </form>
    </div>
  );
>>>>>>> 616814a73211cddc53ef16721b58a5f9933e618b
}
