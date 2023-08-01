import React, { useState } from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

function Movies({ onSaveMovie, onDeleteMovie }) {
  const { pathname } = useLocation();

  const [toggle, setToggle] = useState({
    toggleMovie: true,
    toggleSaveMovie: true,
  });

  return (
    <>
      <Header />
      <SearchForm toggle={toggle} setToggle={setToggle} pathname={pathname} />
      <MoviesCardList
        toggle={toggle}
        pathname={pathname}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
      />
      <Footer />
    </>
  );
}

export default Movies;
