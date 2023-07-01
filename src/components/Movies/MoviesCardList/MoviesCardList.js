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

function MoviesCardList() {
  return (
    <div className="moviesCardList-wrapper">
      <div className="moviesCardList">
        <article className="movieCard">
          <img
            src={movie1}
            alt="33 слов о дизайне"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">33 слова о дизайне</p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie2}
            alt="Киноальманах «100 лет дизайна»"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">Киноальманах «100 лет дизайна»</p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie3}
            alt="В погоне за Бенкси"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">В погоне за Бенкси</p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie4}
            alt="Баския: Взрыв реальности"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">Баския: Взрыв реальности</p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie5}
            alt="Бег это свобода"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">Бег это свобода</p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img src={movie6} alt="Книготорговцы" className="movieCard__image" />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">Книготорговцы</p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie7}
            alt="Когда я думаю о Германии ночью"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">Когда я думаю о Германии ночью</p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie8}
            alt="Gimme Danger: История Игги и The Stooges"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">
              Gimme Danger: История Игги и The Stooges
            </p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie9}
            alt="Дженис: Маленькая девочка грустит"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">
              Дженис: Маленькая девочка грустит
            </p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie10}
            alt="Соберись перед прыжком"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">Соберись перед прыжком</p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie11}
            alt="Пи Джей Харви: A dog called money"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">
              Пи Джей Харви: A dog called money
            </p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
        <article className="movieCard">
          <img
            src={movie12}
            alt="По волнам: Искусство звука в кино"
            className="movieCard__image"
          />
          <div className="movieCard__wrapper">
            <p className="movieCard__caption">
              По волнам: Искусство звука в кино
            </p>
            <time className="movieCard__time">1ч 17м</time>
          </div>
        </article>
      </div>
      <button className="movieCard__btn-more">Ещё</button>
    </div>
  );
}

export default MoviesCardList;
