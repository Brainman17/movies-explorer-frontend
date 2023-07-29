import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MOVIE_LINK } from "../../../utils/constants";
import check from "../../../images/check.svg";
import cross from "../../../images/cross-card.svg";
import "../MoviesCardList/MoviesCardList.css";

function CardItem({ card, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();

  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(true);
  const thumbnail = `${MOVIE_LINK}${card.image?.formats?.thumbnail?.url}`;

  const saveCard = {
    country: card.country,
    director: card.director,
    duration: card.duration,
    year: card.year,
    description: card.description,
    image: `${MOVIE_LINK}${card.image.url}`,
    trailer: card.trailerLink,
    thumbnail: thumbnail,
    movieId: card.id,
    nameRU: card.nameRU,
    nameEN: card.nameEN,
  };

  const handleToggleTag = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (card._id !== undefined) {
      setClicked(false);
    }
  }, [card._id]);

  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;

  function handleSaveMovie() {
    onSaveMovie(saveCard);
  }

  function handleDeleteMovie(card) {
    if (card._id) {
      onDeleteMovie(card._id);
    }
  }

  return (
    <article
      className="card"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {location.pathname === "/movies" && isHovering ? (
        clicked ? (
          <button
            className="card__btn card__btn_type_save"
            onClick={() => {
              handleToggleTag();
              handleSaveMovie();
            }}
          >
            Сохранить
          </button>
        ) : (
          <img
            className="card__check"
            alt="Галочка"
            src={check}
            onClick={() => {
              handleToggleTag();
              handleDeleteMovie(card);
            }}
          />
        )
      ) : (
        ""
      )}
      {location.pathname === "/saved-movies" && isHovering ? (
        <button className="card__btn card__btn_type_cross">
          <img
            src={cross}
            alt="Крестик"
            onClick={() => {
              handleDeleteMovie(card);
            }}
          />
        </button>
      ) : (
        ""
      )}
      <img
        src={location.pathname === '/saved-movies' ? `${card.image}` : `${MOVIE_LINK}${card.image?.url}`}
        alt={card.nameRU}
        className="card__image"
      />
      <div className="card__wrapper">
        <p className="card__caption">{card.director}</p>
        <time className="card__time">
          {`${hours}ч`} {`${minutes}м`}
        </time>
      </div>
    </article>
  );
}

export default CardItem;
