import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

export default function MainRegister({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const { locale } = useContext(LocaleContext);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      if (!isValidEmail(email)) {
        window.alert("Email is invalid.");
      } else {
        register({
          name,
          email,
          password,
        });
      }
    } else {
      window.alert("Password and password confirm must be same.");
    }
  };
  return (
    <>
      <section className="register-page">
        <h2>
          {locale === "en"
            ? "Fill the form to register account."
            : "Isi form untuk mendaftar akun."}
        </h2>
      </section>
      <div className="input-register">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={onNameChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />
        <button className="action" type="button" onClick={onSubmitHandler}>
          {locale === "en" ? "Register" : "Daftar"}
        </button>
      </div>
      <p>
        {locale === "en" ? "Already have an account?" : "Sudah punya akun?"}
      </p>
      <Link to="/">{locale === "en" ? "Login Here" : "Login disini"} </Link>
    </>
  );
}

MainRegister.propTypes = {
  register: PropTypes.func.isRequired,
};
