import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h3>
      <div className="footer__wrapper">
        <p className="footer__date">&#169; {new Date().getFullYear()}</p>
        <p className="footer__caption">Яндекс.Практикум</p>
        <p className="footer__caption">Github</p>
      </div>
    </footer>
  );
}

export default Footer;