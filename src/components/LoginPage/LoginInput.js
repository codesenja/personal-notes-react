import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

export default function LoginInput({ login }) {
  const { locale } = useContext(LocaleContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      window.alert("Email is invalid.");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <>
      <section className="login-page">
        <h2>
          {locale === "en"
            ? "Login to use app, please."
            : "Yuk, login untuk menggunakan aplikasi."}
        </h2>
      </section>
      <div className="input-login">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
        />

        <button className="action" type="button" onClick={onSubmitHandler}>
          {locale === "en" ? "Login" : "Gabung"}
        </button>
      </div>
      <p>{locale === "en" ? "Don't have an account?" : "Belum punya akun?"}</p>
      <Link to="/register">
        {locale === "en" ? "Register here" : "Daftar disini"}
      </Link>
    </>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
