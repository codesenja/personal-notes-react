import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NoteApp from "./App";

// import style
import "./styles/style.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NoteApp />
  </BrowserRouter>
);
