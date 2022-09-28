import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages";
import AddPage from "./pages/add";
import DetailPage from "./pages/detail";
import Fouronfour from "./pages/404";
import ArchivedPage from "./pages/archived";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import { putAccessToken, getUserLogged } from "./utils/network-data";
import HeaderSection from "../src/components/HeaderSection";

export default function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = React.useState(true);

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
    <div className="app-container">
      {/* <HeaderSection logout={onLogout} name={authedUser.name} /> */}
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
  ) : (
    <div className="app-container">
      <HeaderSection logout={onLogout} name={authedUser.name} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/archived" element={<ArchivedPage />} />
          <Route path="/*" element={<Fouronfour />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route /> */}
        </Routes>
      </main>
    </div>
  );
}
