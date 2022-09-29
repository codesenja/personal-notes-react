import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages";
import AddPage from "./pages/add";
import DetailPage from "./pages/detail";
import Fouronfour from "./pages/404";
import ArchivedPage from "./pages/archived";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import {
  putAccessToken,
  getUserLogged,
  getAccessToken,
} from "./utils/network-data";
import HeaderSection from "../src/components/HeaderSection";
import ThemeContext from "./contexts/ThemeContext";
import LocaleContext from "./contexts/LocaleContext";

export default function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [locale, setLocale] = useState(
    () => localStorage.getItem("locale") || "en"
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  useEffect(() => {
    localStorage.setItem("data-theme", theme);
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "en" ? "id" : "en"));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const localeContextValue = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale]
  );

  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
    });
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return authedUser === null ? (
    <LocaleContext.Provider value={localeContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <div className="app-container">
          <HeaderSection />
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  ) : (
    <LocaleContext.Provider value={localeContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <div className="app-container">
          <HeaderSection
            logout={onLogout}
            name={authedUser.name}
            access={getAccessToken()}
          />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/archived" element={<ArchivedPage />} />
              <Route path="/*" element={<Fouronfour />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
}
