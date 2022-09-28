import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import PropTypes from "prop-types";

export default function HeaderSection({ logout, name }) {
  return (
    <header>
      <h1>
        <Link to="/">Notes</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archived">Arsip</Link>
          </li>
        </ul>
      </nav>
      <button type="button" className="button-logout" onClick={logout}>
        <AiOutlineLogout />
        {name}
      </button>
    </header>
  );
}

HeaderSection.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
