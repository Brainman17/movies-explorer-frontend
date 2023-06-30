import React from "react";
import arrow from "../../../images/arrow.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__wrapper">
        <h3 className="portfolio__site-name">Статичный сайт</h3>
        <img src={arrow} alt="Стрелка" className="portfolio__arrow"></img>
      </div>
      <div className="portfolio__wrapper">
        <h3 className="portfolio__site-name">Адаптивный сайт</h3>
        <img src={arrow} alt="Стрелка" className="portfolio__arrow"></img>
      </div>
      <div className="portfolio__wrapper">
        <h3 className="portfolio__site-name">Одностраничное приложение</h3>
        <img src={arrow} alt="Стрелка" className="portfolio__arrow"></img>
      </div>
    </section>
  );
}

export default Portfolio;