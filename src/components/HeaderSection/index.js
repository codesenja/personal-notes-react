import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import PropTypes from "prop-types";
import ToggleTheme from "./ToggleTheme";
import ToggleLocale from "./ToggleLocale";
import LocaleContext from "../../contexts/LocaleContext";

export default function HeaderSection({ logout, name, access }) {
  const { locale } = useContext(LocaleContext);

  return access === undefined ? (
    <header>
      <h1>
        <Link to="/">{locale === "en" ? "NotesApp" : "Aplikasi Catatan"}</Link>
      </h1>
      <ToggleLocale />
      <ToggleTheme />
    </header>
  ) : (
    <header>
      <h1>
        <Link to="/">{locale === "en" ? "NotesApp" : "Aplikasi Catatan"}</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archived">{locale === "en" ? "Archive" : "Arsip"}</Link>
          </li>
        </ul>
      </nav>
      <ToggleLocale />
      <ToggleTheme />
      <button type="button" className="button-logout" onClick={logout}>
        <AiOutlineLogout />
        {name}
      </button>
    </header>
  );
}

HeaderSection.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
  access: PropTypes.string,
};
