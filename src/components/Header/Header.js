import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header({ children }) {

  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' ? 'header__theme_dark' : 'header__theme_light'}`}>
      <Link to='/'>
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
        {children}
    </header>
  );
}

export default Header;