import React from "react";
import "./SearchForm.css";
import searchArrow from "../../../images/search-arrow.svg";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__box">
        <input className="search__input-txt" placeholder="Фильм" type="text" required/>
        <button className="search__btn">
          <img
            src={searchArrow}
            alt="Стрелка поиска"
            className="search__btn-arrow"
          />
        </button>
      </form>
      <div className="switch">
        <h3 className="switch__title">Короткометражки</h3>
        <label className="switch__box">
          <input className="switch__input" type="checkbox" />
          <span className="switch__slider"></span>
        </label>
      </div>
      <hr className="search__line"></hr>
    </section>
  );
}

export default SearchForm;
