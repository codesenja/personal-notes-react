import React from "react";

export default function HeaderSection() {
  return (
    <header>
      <h1>
        <a href="/">Notes</a>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/archives">Arsip</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
