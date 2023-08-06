import React, { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts";
import Header from "../Header/Header";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile({ onLogout }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__wrapper">
          <div className="profile__wrapper-name">
            <h3 className="profile__title-name">Имя</h3>
            <p className="profile__name">{currentUser.name}</p>
          </div>
          <div className="profile__wrapper-email">
            <h3 className="profile__title-name">E-mail</h3>
            <p className="profile__name">{currentUser.email}</p>
          </div>
        </form>
        <Link to="/edit-profile" className="profile__btn-edit">
          Редактировать
        </Link>
        <Link to="/" className="profile__btn-out" onClick={onLogout}>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default React.memo(Profile);
