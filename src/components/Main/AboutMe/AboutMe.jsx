import React from "react";
import "./AboutMe.css";
import MyPhoto from "../../../images/1644889849_14-fikiwiki-com-p-kartinki-krosha-iz-multika-smeshariki-16.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="section__title">Студент</h2>
      <hr className="section__line"></hr>
      <div className="about-me__wrapper">
        <div className="about-me__small-wrapper">
          <h3 className="about-me__title">Егор</h3>
          <h4 className="about-me__subtitle">Фронтенд-разработчик, 24 года</h4>
          <p className="about-me__text">
            Я&nbsp;родился в&nbsp;городе Томске, но&nbsp;уже в&nbsp;8&nbsp;лет
            вместе с&nbsp;моей семьей переехал в&nbsp;Москву. Здесь окончил
            факультет международных отношений РУТ по&nbsp;специальности
            логистика/менеджмент. В&nbsp;свободное время мне нравится играть
            в&nbsp;футбол, на&nbsp;гитаре и&nbsp;кататься на&nbsp;сноуборде.
            С&nbsp;некоторых пор решил погрузиться в&nbsp;веб-разработку.
            А&nbsp;этот диплом как вишенка на&nbsp;торте моего прохождения курса
            от&nbsp;Я.Практикум.
          </p>
          <p className="about-me__caption">
            Github:
            <a href="https://github.com/Brainman17" className="about-me__link">
              https://github.com/Brainman17
            </a>
          </p>
        </div>
        <div>
          <img
            src={MyPhoto}
            alt="Моя фотография"
            className="about-me__image"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
