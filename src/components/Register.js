import React, { useState } from "react";
import Header from "./Header";
import SignMain from './SignMain';
import InfoTooltip from "./InfoTooltip";

export default function Register() {
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <Header signLink='/sign-in' signText='Войти' />
      <SignMain title='Регистрация' submitText='Зарегистрироваться' signUp={true} />
      <InfoTooltip signUp={signUp} />
    </>
  );
}