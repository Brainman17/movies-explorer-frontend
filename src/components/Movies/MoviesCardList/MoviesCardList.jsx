import React, { useContext, useState, useEffect } from "react";
import "./MoviesCardList.css";
import CardItem from "../CardItem/CardItem";
import Preloader from "../Preloader/Preloader";
import { CurrentUserContext } from "../../../utils/contexts";
import useCurrentWidth from "../../hooks/useCurrentWidth";
import { MOVIE_DURATION } from "../../../utils/constants";

function MoviesCardList({ toggle, pathname, onSaveMovie, onDeleteMovie }) {
  const { isLoading, filterMovies, filterSavedMovies } =
    useContext(CurrentUserContext);
  const { countMovies } = useCurrentWidth();
  const [moreMovies, setMoreMovies] = useState(countMovies[0]);

  let isShortMovies =
    pathname === "/movies" ? toggle.toggleMovie : toggle.toggleSaveMovie;
  let movies = pathname === "/movies" ? filterMovies : filterSavedMovies;

  if (!isShortMovies) {
    movies = movies.filter((movie) => movie.duration <= MOVIE_DURATION);
  }

  useEffect(() => {
    setMoreMovies(countMovies[0]);
  }, [countMovies]);

  const ifSearchMovies = localStorage.getItem("searchMovie");

  return (
    <section className="card-list">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="card-list__wrapper">
            {movies &&
              movies.slice(0, moreMovies).map((card) => {
                return (
                  <CardItem
                    card={card}
                    key={card.id || card._id}
                    onSaveMovie={onSaveMovie}
                    onDeleteMovie={onDeleteMovie}
                  />
                );
              })}
            {movies.length === 0 && ifSearchMovies && (
              <span className="card-list__nothing-found">
                Ничего не найдено
              </span>
            )}
          </div>
          {movies.length > moreMovies && (
            <button
              className="card__btn-more"
              onClick={() => setMoreMovies((prev) => prev + countMovies[1])}
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
