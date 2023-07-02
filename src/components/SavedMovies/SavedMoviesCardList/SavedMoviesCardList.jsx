import React from "react";
import "./SavedMoviesCardList.css";
import movie1 from "../../../images/movies/movie 1-1.jpg";
import movie2 from "../../../images/movies/movie 1-2.jpg";
import movie3 from "../../../images/movies/movie 1-3.jpg";
import cross from "../../../images/cross-card.svg";

function SavedMoviesCardList() {
  return (
    <div className="moviesCardList-wrapper">
        <div className="moviesCardList">
            <article className="movieCard">
                <button className="movieCard__btn movieCard__btn_type_cross"><img src={cross} alt="Крестик"/></button>
                <img src={movie1} alt="33 слов о дизайне" className="movieCard__image" />
                <div className="movieCard__wrapper">    
                    <p className="movieCard__caption">33 слова о дизайне</p>
                    <time className="movieCard__time">1ч 17м</time>
                </div>
            </article>
            <article className="movieCard">
                <img src={movie2} alt="Киноальманах «100 лет дизайна»" className="movieCard__image" />
                <div className="movieCard__wrapper">    
                    <p className="movieCard__caption">Киноальманах «100 лет дизайна»</p>
                    <time className="movieCard__time">1ч 17м</time>
                </div>
            </article>
            <article className="movieCard">
                <img src={movie3} alt="В погоне за Бенкси" className="movieCard__image" />
                <div className="movieCard__wrapper">    
                    <p className="movieCard__caption">В погоне за Бенкси</p>
                    <time className="movieCard__time">1ч 17м</time>
                </div>
            </article>
        </div>
    </div>
  );
}

export default SavedMoviesCardList;
