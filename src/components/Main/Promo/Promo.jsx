import React from "react";
import "./Promo.css";
import curl from "../../../images/curl.svg";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img src={curl} alt="Завитушка" className="promo__curl" />
    </section>
  );
}

export default Promo;
