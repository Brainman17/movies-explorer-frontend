import React from "react";
import "./MoviesCardList.css";
import movie1 from "../../../images/movies/movie 1-1.jpg";
import movie2 from "../../../images/movies/movie 1-2.jpg";
import movie3 from "../../../images/movies/movie 1-3.jpg";
import movie4 from "../../../images/movies/movie 2-1.jpg";
import movie5 from "../../../images/movies/movie 2-2.jpg";
import movie6 from "../../../images/movies/movie 2-3.jpg";
import movie7 from "../../../images/movies/movie 3-1.jpg";
import movie8 from "../../../images/movies/movie 3-2.jpg";
import movie9 from "../../../images/movies/movie 3-3.jpg";
import movie10 from "../../../images/movies/movie 4-1.jpg";
import movie11 from "../../../images/movies/movie 4-2.jpg";
import movie12 from "../../../images/movies/movie 4-3.jpg";
import check from "../../../images/check.svg";

function MoviesCardList() {
  return (
    <section className="card-list">
      <div className="card-list__wrapper">
        <article className="card">
          <button className="card__btn card__btn_type_save">Сохранить</button>
          <img
            src={movie1}
            alt="33 слов о дизайне"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">33 слова о дизайне</p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img
            src={movie2}
            alt="Киноальманах «100 лет дизайна»"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">Киноальманах «100 лет дизайна»</p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img
            src={movie3}
            alt="В погоне за Бенкси"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">В погоне за Бенкси</p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
        <button className="card__btn card__btn_type_check"><img
            src={check}
            alt="Галочка"
            className="card__check"
          /></button>
          <img
            src={movie4}
            alt="Баския: Взрыв реальности"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">Баския: Взрыв реальности</p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img
            src={movie5}
            alt="Бег это свобода"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">Бег это свобода</p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img src={movie6} alt="Книготорговцы" className="card__image" />
          <div className="card__wrapper">
            <p className="card__caption">Книготорговцы</p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img
            src={movie7}
            alt="Когда я думаю о Германии ночью"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">Когда я думаю о Германии ночью</p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img
            src={movie8}
            alt="Gimme Danger: История Игги и The Stooges"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">
              Gimme Danger: История Игги и The Stooges
            </p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img
            src={movie9}
            alt="Дженис: Маленькая девочка грустит"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">
              Дженис: Маленькая девочка грустит
            </p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img
            src={movie10}
            alt="Соберись перед прыжком"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">Соберись перед прыжком</p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img
            src={movie11}
            alt="Пи Джей Харви: A dog called money"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">
              Пи Джей Харви: A dog called money
            </p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
        <article className="card">
          <img
            src={movie12}
            alt="По волнам: Искусство звука в кино"
            className="card__image"
          />
          <div className="card__wrapper">
            <p className="card__caption">
              По волнам: Искусство звука в кино
            </p>
            <time className="card__time">1ч 17м</time>
          </div>
        </article>
      </div>
      <button className="card__btn-more">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
