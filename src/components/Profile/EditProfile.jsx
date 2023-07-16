import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CurrentUserContext } from "../../utils/contexts";
import Header from "../Header/Header";
import "./Profile.css";
import "../Register/Register.css";

function EditProfile({ onUpdateUser, updateUserError }) {
  const currentUser = useContext(CurrentUserContext);

  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: currentUser.email,
      name: currentUser.name,
    },
  });

  const onSubmit = (data) => {
    onUpdateUser(data);
    console.log(data)
    reset();
  };

  return (
    <>
      <Header />
      <section className="profile profile_type_edit">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form
          className="profile__wrapper profile__wrapper_type_edit"
          name="Регистрация"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="profile__wrapper-name">
            <h3 className="profile__title-name">Имя</h3>
            <input
              {...register("name", {
                required: "Поле 'Имя' должно быть обязательным!",
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
              className="profile__input"
            />
          </label>
          {errors?.name && (
            <span className="profile__input-error">
              {errors?.name?.message}
            </span>
          )}
          <label className="profile__wrapper-email">
            <h3 className="profile__title-name">E-mail</h3>
            <input
              {...register("email", {
                required: "Поле 'E-mail' обязательно к заполнению!",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Введите корректный email",
                },
              })}
              className="profile__input"
              type="text"
            />
          </label>
          {errors?.email && (
            <span className="profile__input-error">
              {errors?.email?.message}
            </span>
          )}
        </form>
        <span className="profile__error">
          {updateUserError}
        </span>
        <button
          className={`profile__btn-save ${
            !isValid ? "auth__btn_type_disabled" : ""
          }`}
          disabled={!isValid}
        >
          Сохранить
        </button>
      </section>
    </>
  );
}

export default EditProfile;
