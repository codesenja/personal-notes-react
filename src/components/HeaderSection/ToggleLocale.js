import React, { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
import { MdOutlineGTranslate } from "react-icons/md";
export default function ToggleLocale() {
  const { toggleLocale } = useContext(LocaleContext);

  return (
    <>
      <button type="button" onClick={toggleLocale} className="toggle-locale">
        <MdOutlineGTranslate />
      </button>
    </>
  );
}
