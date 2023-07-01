import React, { useState } from "react";
import Header from "../Header/Header";
import account from "../../images/account.svg";
import IconCross from "../../images/cross-icon.svg";
import IconBurger from "../../images/burger-icon.svg";
import { NavLink } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Header>
        <nav className="header__wrapper">
          <div
            className={`header__wrapper-menu ${
              nav ? "header__wrapper-menu_active" : ""
            }`}
          >
            <div className="header__wrapper-movies">
              <NavLink to="/" className="header__main-page">
                Главная
              </NavLink>
              <NavLink to="/movies" className="header__movies">
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies" className="header__saved-movies">
                Сохранённые фильмы
              </NavLink>
            </div>
            <button className="header__btn-account">
              <img
                src={account}
                alt="Иконка аккаунта"
                className="header__icon-account"
              />
              Аккаунт
            </button>
          </div>
          <button onClick={() => setNav(!nav)} className="header__icon-btn">
            {nav ? (
              <img src={IconCross} alt="Иконка крестика" />
            ) : (
              <img src={IconBurger} alt="Иконка бургера" />
            )}
          </button>
        </nav>
      </Header>
      <section className="profile">
        <h2 className="profile__title">Привет, Егор!</h2>
        <div className="profile__wrapper profile__wrapper-name">
          <h3 className="profile__title-name">Имя</h3>
          <p className="profile__name"> Егор</p>
        </div>
        <div className="profile__wrapper profile__wrapper-email">
          <h3 className="profile__title-name">E-mail</h3>
          <p className="profile__name">yandex.ru</p>
        </div>
        <button className="profile__btn-edit">Редактировать</button>
        <button className="profile__btn-out">Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;
