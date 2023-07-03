import React from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <>
      <Header />
      <section className="profile profile_type_edit">
        <h2 className="profile__title">Привет, Егор!</h2>
        <div className="profile__wrapper profile__wrapper-name">
          <h3 className="profile__title-name">Имя</h3>
          <p className="profile__name"> Егор</p>
        </div>
        <div className="profile__wrapper profile__wrapper-email">
          <h3 className="profile__title-name">E-mail</h3>
          <p className="profile__name">yandex.ru</p>
        </div>
        <button className="profile__btn-save">Сохранить</button>
      </section>
    </>
  );
}

export default EditProfile;
