import React from "react";
import cross from "../../../images/cross-card.svg";
import { arraySavedMovies } from "../../../utils/constants";

function SavedMoviesCardList() {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  const list = arraySavedMovies.map((card) => (
    <article className="card">
      {/* {isHovering ? (
        <button className="card__btn card__btn_type_cross">
          <img src={cross} alt="Крестик" />
        </button>
      ) : (
        ""
      )} */}
      <button className="card__btn card__btn_type_cross">
        <img src={cross} alt="Крестик" />
      </button>
      <img
        src={card.image}
        alt={card.title}
        className="card__image"
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
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
    </section>
  );
}

export default SavedMoviesCardList;
