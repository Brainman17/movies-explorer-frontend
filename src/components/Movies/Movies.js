import React, { useState } from "react";
import Header from "../Header/Header";
import account from "../../images/account.svg";
import IconCross from "../../images/cross-icon.svg";
import IconBurger from "../../images/burger-icon.svg";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

function Movies() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Header>
        <nav
          className="header__wrapper"
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
          <button onClick={() => setNav(!nav)} className="header__icon-btn">
            {nav ? <img src={IconCross} alt="Иконка крестика"/> : <img src={IconBurger} alt="Бургер-меню"/>}
          </button>
        </nav>
      </Header>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;
