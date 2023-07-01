import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="auth">
      <Link to="/">
        <img src={logo} alt="Логотип" className="auth__logo" />
      </Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form name="Регистрация" className="auth__form">
        <label className="auth__input-caption">
          E-mail
          <input
            required
            minLength="2"
            maxLength="30"
            type="text"
            name="email"
            className="auth__input auth__input_email"
          />
        </label>
        <label className="auth__input-caption">
          Пароль
          <input
            required
            minLength="2"
            maxLength="30"
            type="password"
            name="password"
            className="auth__input auth__input_password"
          />
        </label>
        <button
          type="submit"
          aria-label="Кнопка регистрации"
          className="auth__btn"
        >
          Войти
        </button>
        <p className="auth__btn-caption">
          Ещё не зарегистрированы?
          <Link className="auth__btn-link" to="/sign-up">
            &nbsp;Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
