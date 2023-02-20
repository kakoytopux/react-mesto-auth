import React from "react";
import Header from "./Header";
import SignMain from './SignMain';

export default function Login() {
  return (
    <>
    <Header signLink='/sign-up' signText='Регистрация' />
    <SignMain title='Вход' submitText='Войти' />
    </>
  );
}