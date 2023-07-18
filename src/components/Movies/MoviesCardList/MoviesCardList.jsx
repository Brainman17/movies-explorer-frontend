import React, { useState } from "react";
import "./MoviesCardList.css";
import { arrayMovies } from "../../../utils/constants";
// import check from "../../../images/check.svg";

function MoviesCardList() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  const list = arrayMovies.map((card) => (
    <article className="card">
      {isHovering ? (
        <button className="card__btn card__btn_type_save">Сохранить</button>
      ) : (
        ""
      )}
      {/* <button className="card__btn card__btn_type_check">
        <img src={check} alt="Галочка" className="card__check" />
      </button> */}
      <img
        src={card.image}
        alt={card.title}
        className="card__image"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <div className="card__wrapper">
        <p className="card__caption">{card.title}</p>
        <time className="card__time">{card.duration}</time>
      </div>
    </article>
  ));

  return (
    <section className="card-list">
      <div className="card-list__wrapper">{list}</div>
      <button className="card__btn-more">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
