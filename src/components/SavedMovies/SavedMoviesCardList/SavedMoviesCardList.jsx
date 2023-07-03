import React from "react";
import "./SavedMoviesCardList.css";
import movie1 from "../../../images/movies/movie 1-1.jpg";
import movie2 from "../../../images/movies/movie 1-2.jpg";
import movie3 from "../../../images/movies/movie 1-3.jpg";
import cross from "../../../images/cross-card.svg";

function SavedMoviesCardList() {
  return (
    <section className="card-list">
        <div className="card-list__wrapper">
            <article className="card">
                <button className="card__btn card__btn_type_cross"><img src={cross} alt="Крестик"/></button>
                <img src={movie1} alt="33 слов о дизайне" className="card__image" />
                <div className="card__wrapper">    
                    <p className="card__caption">33 слова о дизайне</p>
                    <time className="card__time">1ч 17м</time>
                </div>
            </article>
            <article className="card">
                <img src={movie2} alt="Киноальманах «100 лет дизайна»" className="card__image" />
                <div className="card__wrapper">    
                    <p className="card__caption">Киноальманах «100 лет дизайна»</p>
                    <time className="card__time">1ч 17м</time>
                </div>
            </article>
            <article className="card">
                <img src={movie3} alt="В погоне за Бенкси" className="card__image" />
                <div className="card__wrapper">    
                    <p className="card__caption">В погоне за Бенкси</p>
                    <time className="card__time">1ч 17м</time>
                </div>
            </article>
        </div>
    </section>
  );
}

export default SavedMoviesCardList;
