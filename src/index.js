import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "../src/pages";
import AddPage from "./pages/add";
import DetailPage from "./pages/detail";
import Fouronfour from "./pages/404";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Route path="/" element={<LandingPage />} />
    <Route path="/add" element={<AddPage />} />
    <Route path="/detail/:id" element={<DetailPage />} />
    <Route path="/*" element={<Fouronfour />} />
    {/* <Route /> */}
  </BrowserRouter>
);
