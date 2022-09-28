import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import MainRegister from "../components/RegisterPage/RegisterInput";
import { register } from "../utils/network-data";
export default function RegisterPage() {
  const navigate = useNavigate();

  const onRegisterHandler = async (users) => {
    // const { error } = await register(users);
    // if (!error) {
    //   navigate("/");
    // }
  };

  return (
    <>
      <HeaderSection />
      <main>
        <MainRegister register={onRegisterHandler} />
      </main>
    </>
  );
}
