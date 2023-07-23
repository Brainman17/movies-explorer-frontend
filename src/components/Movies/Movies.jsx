import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ onSearch}) {
  return (
    <>
      <Header />
      <SearchForm onSearch={onSearch}/>
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;
