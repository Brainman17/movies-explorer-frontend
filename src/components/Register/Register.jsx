import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register({ onRegister, registerError }) {
  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    onRegister(data);
    reset();
  };

  return (
    <section className="auth">
      <Link to="/">
        <img src={logo} alt="Логотип" className="auth__logo" />
      </Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form
        name="Регистрация"
        className="auth__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="auth__input-caption">
          Имя
          <input
            {...register("name", {
              required: "Поле 'Имя' обязательно к заполнению!",
              minLength: {
                value: 2,
                message: "Минимальная длина 2 символа",
              },
              maxLength: {
                value: 15,
                message: "Максимальная длина 15 символов",
              },
              pattern: {
                value: /^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\s-]*$/,
                message:
                  "Поле 'Имя' должно содержать только латиницу, кириллицу, пробел или дефис.",
              },
            })}
            className={`auth__input ${
              errors.name ? "auth__input_color-red" : ""
            }`}
          />
          <div className={` ${errors.name ? "auth__wrapper-error" : ""}`}>
            {errors?.name && (
              <span className="auth__input-error">{errors?.name?.message}</span>
            )}
          </div>
        </label>
        <label className="auth__input-caption">
          E-mail
          <input
            {...register("email", {
              required: "Поле 'E-mail' обязательно к заполнению!",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Введите корректный email",
              },
            })}
            className={`auth__input ${
              errors.email ? "auth__input_color-red" : ""
            }`}
            type="text"
          />
          <div className={` ${errors.email ? "auth__wrapper-error" : ""}`}>
            {errors?.email && (
              <span className="auth__input-error">
                {errors?.email?.message}
              </span>
            )}
          </div>
        </label>
        <label className="auth__input-caption">
          Пароль
          <input
            {...register("password", {
              required: "Поле 'Пароль' обязательно к заполнению!",
              minLength: {
                value: 4,
                message: "Минимальная длина пароля 4 символа",
              },
              maxLength: {
                value: 30,
                message: "Максимальная длина пароля 30 символов",
              },
            })}
            className={`auth__input ${
              errors.password ? "auth__input_color-red" : ""
            }`}
            type="password"
          />
          <div className={` ${errors.password ? "auth__wrapper-error" : ""}`}>
            {errors?.password && (
              <span className="auth__input-error">
                {errors?.password?.message}
              </span>
            )}
          </div>
        </label>
        <div className="auth__btn_type_sign-up">
          <span className="auth__errors_type_sign-up">Ошибка: {registerError}</span>
          <button
            type="submit"
            aria-label="Кнопка регистрации"
            className={`auth__btn ${!isValid ? "auth__btn_type_disabled" : ""}`}
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <p className="auth__btn-caption">
            Уже зарегистрированы?
            <Link className="auth__btn-link" to="/sign-in">
              &nbsp;Войти
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;
