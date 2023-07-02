import React from "react";
import curl from "../../../images/curl.svg";
import "./Promo.css";

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
