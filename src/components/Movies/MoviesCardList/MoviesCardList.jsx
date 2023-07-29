import React, { useContext } from "react";
import "./MoviesCardList.css";
import CardItem from "../CardItem/CardItem";
import { CurrentUserContext } from "../../../utils/contexts";

function MoviesCardList({ toggle, pathname, onSaveMovie, onDeleteMovie }) {
  const { filterMovies, filterSavedMovies } = useContext(CurrentUserContext);
  
  let isShortMovies = pathname === '/movies' ? toggle.toggleMovie : toggle.toggleSaveMovie;
  let movies = pathname === '/movies' ? filterMovies : filterSavedMovies;
  
  
  if(!isShortMovies) {
    movies = movies.filter((movie) => movie.duration <= 40 )
  }

  return (
    <section className="card-list">
      <div className="card-list__wrapper">
        { movies && movies.map((card) => {
        return <CardItem card={card} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie}/>})
        }
      </div>
      <button className="card__btn-more">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
