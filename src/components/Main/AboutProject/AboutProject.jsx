import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="section__title">О&nbsp;проекте</h2>
      <hr className="section__line"/>
      <div className="about-project__wrapper">
        <div className="about-project__wrapper_column">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about-project__text about-project__text-column-one">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="about-project__wrapper_column">
          <h3 className="about-project__subtitle">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about-project__text about-project__text-column-two">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <table className="about-project__table">
        <tr className="about-project__table-row">
          <th className="about-project__table-title">1&nbsp;неделя</th>
          <th className="about-project__table-title">4&nbsp;недели</th>
        </tr>
        <tr className="about-project__table-row">
          <th className="about-project__table-subtitle">Back-end</th>
          <th className="about-project__table-subtitle">Front-end</th>
        </tr>
      </table>
    </section>
  );
}

export default AboutProject;
