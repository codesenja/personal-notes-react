import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button type="button" onClick={toggleTheme} className="toggle-theme">
        {theme === "dark" && <RiSunFill size={36} />}
        {theme === "light" && <RiMoonFill size={36} />}
      </button>
    </>
  );
}
