import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Логотип" className="header__logo" />
        <div className="header__buttons">
          <button className="header__button header__btn-signup">Регистрация</button>
          <button className="header__button header__btn-signin">Войти</button>
        </div>
    </header>
  );
}

export default Header;