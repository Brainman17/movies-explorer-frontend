import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="section__title">Технологии</h2>
      <hr className="section__line"></hr>
      <div className="techs__wrapper">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-cell"><p className="techs__list-cell-text">HTML</p></li>
          <li className="techs__list-cell"><p className="techs__list-cell-text">CSS</p></li>
          <li className="techs__list-cell"><p className="techs__list-cell-text">JS</p></li>
          <li className="techs__list-cell"><p className="techs__list-cell-text">React</p></li>
          <li className="techs__list-cell"><p className="techs__list-cell-text">Git</p></li>
          <li className="techs__list-cell"><p className="techs__list-cell-text">Express.js</p></li>
          <li className="techs__list-cell"><p className="techs__list-cell-text">mongoDB</p></li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
