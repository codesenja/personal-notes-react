import React from "react";
import HeaderSection from "../components/HeaderSection";
import LoginInput from "../components/LoginPage/LoginInput";
import { login } from "../utils/network-data";

export default function LoginPage({ loginSuccess }) {
  const onLoginHandler = async (users) => {
    const { error, data } = await login(users);
    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <>
      <HeaderSection />
      <main>
        <LoginInput login={onLoginHandler} />
      </main>
    </>
  );
}
