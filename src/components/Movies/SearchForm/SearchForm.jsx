import React, { useContext, useEffect, useCallback } from "react";
import "./SearchForm.css";
import searchArrow from "../../../images/search-arrow.svg";
import { CurrentUserContext } from "../../../utils/contexts";
import { useForm } from "react-hook-form";

function SearchForm({ toggle, setToggle, pathname }) {
  const {
    movies,
    savedMovies,
    setFilterSavedMovies,
    setFilterMovies,
    currentUser,
  } = useContext(CurrentUserContext);

  const name = pathname === "/movies" ? "Movie" : "SaveMovie";

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onSubmit",
  });

  useEffect(() => {
    if (currentUser._id) {
      const toggleMovie = localStorage.getItem('toggleMovie');
      if (toggleMovie !== null) {
        setToggle((prev) => ({
          ...prev,
          toggleMovie: JSON.parse(toggleMovie),
        }));
      }
    }
  }, [currentUser, setToggle]);

  const filteredMovies = useCallback(
    (valueName) => {
      const arrMovies =
        pathname === "/movies"
          ? [movies, setFilterMovies]
          : [savedMovies, setFilterSavedMovies];

      const filteredMovies = arrMovies[0].filter((m) => {
        return (
          m.nameRU.toLowerCase().includes(valueName.toLowerCase()) ||
          m.nameEN.toLowerCase().includes(valueName.toLowerCase())
        );
      });

      arrMovies[1](filteredMovies);
    },
    [movies, savedMovies, pathname, setFilterMovies, setFilterSavedMovies]
  );

  useEffect(() => {
    if (currentUser._id && movies.length > 0) {
      if (pathname === "/movies") {
        const movies = localStorage.getItem('searchMovie');
        if (movies !== null) {
          setValue("search", movies);
          filteredMovies(movies);
        }
      }
    }
  }, [currentUser, movies, pathname, filteredMovies, setValue]);

  const onToggleSwitch = () => {
    if (pathname === "/movies") {
      localStorage.setItem('toggleMovie', !toggle.toggleMovie);
    }
    setToggle((prev) => ({
      ...prev,
      [`toggle${name}`]: !prev[`toggle${name}`],
    }));
  };

  const onSubmit = ({ search }) => {
    localStorage.setItem(`search${name}`, search);
    filteredMovies(search);
  };

  return (
    <section className="search">
      <form className="search__box" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="search__input-txt"
          placeholder="Фильм"
          {...register("search", {
            required: "Нужно ввести ключевое слово",
          })}
        />
        {errors?.search && (
          <span className="search__input-error">{errors?.search?.message}</span>
        )}
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
          <input
            className="switch__input"
            type="checkbox"
            checked={toggle[`toggle${name}`]}
            onClick={onToggleSwitch}
          />
          <span className="switch__slider"></span>
        </label>
      </div>
      <hr className="search__line" />
    </section>
  );
}

export default SearchForm;
