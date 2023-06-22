import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <hr className="about-project__line"></hr>
      <div className="about-project__wrapper">
        <div className="about-project__wrapper_column-one">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <p>1 неделя</p>
            <p className="about-project__subtext">Back-end</p>
        </div>
        <div className="about-project__wrapper_column-two">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            <p>4 недели</p>
            <p className="about-project__subtext">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;