import React, { useState } from "react";
import Header from "../Header/Header";
import account from "../../images/account.svg";
import IconCross from "../../images/cross-icon.svg";
import IconBurger from "../../images/burger-icon.svg";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

function SavedMovies() {
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
            <NavLink to="/profile" className="header__btn-account">
              <img
                src={account}
                alt="Иконка аккаунта"
                className="header__icon-account"
              />
              Аккаунт
            </NavLink>
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
      <SearchForm />
      <SavedMoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
