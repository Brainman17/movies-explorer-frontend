import React from "react";
import arrow from "../../../images/arrow.svg";
import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <Link to="https://github.com/Brainman17/how-to-learn.git" className="portfolio__wrapper" target="_blank">
        <h3 className="portfolio__site-name">Статичный сайт</h3>
        <img src={arrow} alt="Стрелка" className="portfolio__arrow"></img>
      </Link>
      <Link to="https://github.com/Brainman17/russian-travel.git" className="portfolio__wrapper" target="_blank">
        <h3 className="portfolio__site-name">Адаптивный сайт</h3>
        <img src={arrow} alt="Стрелка" className="portfolio__arrow"></img>
      </Link>
      <Link to="https://github.com/Brainman17/react-mesto-auth.git" className="portfolio__wrapper" target="_blank">
        <h3 className="portfolio__site-name">Одностраничное приложение</h3>
        <img src={arrow} alt="Стрелка" className="portfolio__arrow"></img>
      </Link>
    </section>
  );
}

export default Portfolio;
