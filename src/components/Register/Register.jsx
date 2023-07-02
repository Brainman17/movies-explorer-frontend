import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    },
    [userData]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onRegister(userData);
    },
    [onRegister, userData]
  );

  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();

  return (
    <section className="auth">
      <Link to="/">
        <img src={logo} alt="Логотип" className="auth__logo" />
      </Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form name="Регистрация" className="auth__form" onSubmit={handleSubmit}>
        <label className="auth__input-caption">
          Имя
          <input
            value={userData.name}
            onChange={handleChange}
            required
            minLength="2"
            maxLength="30"
            type="text"
            name="name"
            className="auth__input auth__input_name"
            // {...register("name", {required: "Что-то пошло не так"})}
          />
        </label>
        {/* <div style={{height: 20}}>
          {errors?.name && <span>{errors?.name?.message}</span>}
        </div> */}
        <label className="auth__input-caption">
          E-mail
          <input
            value={userData.email}
            onChange={handleChange}
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
            value={userData.password}
            onChange={handleChange}
            required
            minLength="2"
            maxLength="30"
            type="password"
            name="password"
            className="auth__input auth__input_password"
          />
          <span className="auth__input-error">Что-то пошло не так...</span>
        </label>
        <button
          type="submit"
          aria-label="Кнопка регистрации"
          className="auth__btn"
          onSubmit={handleSubmit}
        >
          Зарегистрироваться
        </button>
        <p className="auth__btn-caption">
          Уже зарегистрированы?
          <Link className="auth__btn-link" to="/sign-in">
            &nbsp;Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
