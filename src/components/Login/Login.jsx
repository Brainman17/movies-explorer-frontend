import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../utils/contexts";

function Login({ onLogin }) {
  const { isErrors } = useContext(CurrentUserContext);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    onLogin(data);
    reset();
  };

  return (
    <section className="auth">
      <Link to="/">
        <img src={logo} alt="Логотип" className="auth__logo" />
      </Link>
      <h2 className="auth__title">Рады видеть!</h2>
      <form
        name="Регистрация"
        className="auth__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="auth__input-caption">
          E-mail
          <input
            type="text"
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
            type="password"
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
          />
          <div className={` ${errors.password ? "auth__wrapper-error" : ""}`}>
            {errors?.password && (
              <span className="auth__input-error">
                {errors?.password?.message}
              </span>
            )}
          </div>
        </label>
        <div className="auth__btn_type_sign-in">
          {isErrors.login && (
            <span className="auth__errors_type_sign-in">{isErrors.login}</span>
          )}
          <button
            type="submit"
            aria-label="Кнопка регистрации"
            className={`auth__btn ${!isValid ? "auth__btn_type_disabled" : ""}`}
            disabled={!isValid}
          >
            Войти
          </button>
        </div>
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
