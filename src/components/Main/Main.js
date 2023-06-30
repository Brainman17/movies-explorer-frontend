import React from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';

function Main () {
  return (
    <>
      <Header>
        <nav className="header__buttons">
          <NavLink to="/sign-up" className="header__button header__btn-signup">Регистрация</NavLink>
          <NavLink to="/sign-in"className="header__button header__btn-signin">Войти</NavLink>
        </nav>
      </Header>
      <main className="main">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </>
  )
}

export default Main; 