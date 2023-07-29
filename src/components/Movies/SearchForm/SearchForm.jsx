import React, { useContext, useEffect, useState } from "react";
import "./SearchForm.css";
import searchArrow from "../../../images/search-arrow.svg";
import { useForm } from "react-hook-form";
import { CurrentUserContext } from "../../../utils/contexts";

function SearchForm({ toggle, setToggle, pathname, onSearch }) {
  const { movies, savedMovies, setFilterSavedMovies, setFilterMovies, currentUser } = useContext(CurrentUserContext);
  const name = (pathname === '/movies') ? 'toggleMovie' : 'toggleSaveMovie';

  console.log(movies)

  const [value, setValue] = useState('');
  const filteredMovies = movies.filter(m => m.nameRu.toLowerCase().includes(value.toLowerCase()))

  const {
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      // email: currentUser.email,
      // name: currentUser.name,
    },
  });

  const onSubmit = () => {
    onSearch()
  };

  useEffect(() => {
    if(currentUser._id) {
      const toggle = localStorage.getItem(`toggleMovie_${currentUser._id}`);
      const kino = localStorage.getItem(`kino_${currentUser._id}`);

      if(toggle !== null) {
        setToggle(prev => ({...prev, toggleMovie: JSON.parse(toggle)}))
      }
      if(kino !== null) {
        // setFilterMovies() filter kino
        // setFilterMovies(prev => ({...prev, toggleMovie: JSON.parse(local)}))
      //  ? setFilterMovies
      //
      }
    }
  }, [currentUser, setToggle, name])


  const onSearchMovies = () => {
      
  }

  const onToggleSwitch = () => {
    if(pathname === '/movies') {
      localStorage.setItem(`toggleMovie_${currentUser._id}`, !toggle.toggleMovie);
    }
    setToggle(prev => ({...prev, [name]: !prev[name]}))
  }


  return (
    <section className="search">
      <form className="search__box" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="search__input-txt"
          placeholder="Фильм"
          type="text"
          required
          minLength="2"
          maxLength="30"
          onChange={(evt) => setValue(evt.target.value)}
          // value={}
        />
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
          <input className="switch__input" type="checkbox" checked={toggle[name]} onClick={onToggleSwitch}/>
          <span className="switch__slider"></span>
        </label>
      </div>
      <hr className="search__line" />
    </section>
  );
}

export default SearchForm;
