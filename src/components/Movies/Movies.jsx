import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import movie1 from "../../images/movies/movie 1-1.jpg";

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList title="33ckjdf" image={movie1}/>
      <Footer />
    </>
  );
}

export default Movies;
