import React from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile({ onLogout }) {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Егор!</h2>
        <div className="profile__wrapper">
          <div className="profile__wrapper-name">
            <h3 className="profile__title-name">Имя</h3>
            <p className="profile__name">Егор</p>
          </div>
          <div className="profile__wrapper-email">
            <h3 className="profile__title-name">E-mail</h3>
            <p className="profile__name">yandex.ru</p>
          </div>
        </div>
        <Link to="/edit-profile" className="profile__btn-edit">Редактировать</Link>
        <Link to="/sign-in" className="profile__btn-out" onClick={onLogout}>Выйти из аккаунта</Link>
      </section>
    </>
  );
}

export default Profile;
