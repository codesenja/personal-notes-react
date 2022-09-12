import React from "react";
import { Link } from "react-router-dom";

export default function HeaderSection() {
  return (
    <header>
      <h1>
        <Link to="/">Notes</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archives">Arsip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
