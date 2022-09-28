import React from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import PropTypes from "prop-types";

export default function LoginInput({ login }) {
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
        <h2>Login to use app, please.</h2>
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
          Login
        </button>
      </div>
      <p>Don't have an account? </p>
      <Link to="/register">Register here</Link>
    </>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
