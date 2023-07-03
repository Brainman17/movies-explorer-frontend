import React from "react";
import Header from "../Header/Header";
import "./Profile.css";

function EditProfile() {
  return (
    <>
      <Header />
      <section className="profile profile_type_edit">
        <h2 className="profile__title">Привет, Егор!</h2>
        <div className="profile__wrapper profile__wrapper_type_edit">
          <div className="profile__wrapper-name">
            <h3 className="profile__title-name">Имя</h3>
            <p className="profile__name">Егор</p>
          </div>
          <div className="profile__wrapper-email">
            <h3 className="profile__title-name">E-mail</h3>
            <p className="profile__name">yandex.ru</p>
          </div>
        </div>
        <span className="profile__error">
          При обновлении профиля произошла ошибка.
        </span>
        <button className="profile__btn-save">Сохранить</button>
      </section>
    </>
  );
}

export default EditProfile;
