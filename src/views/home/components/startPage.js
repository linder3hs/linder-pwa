/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

const StartPage = () => {
  return (
    <div className="container__home">
      <p className="hello">👋 Hello, I'm</p>
      <h1 className="title__home">Linder Hassinger</h1>
      <h4 className="subtitle">Lead Software Developer</h4>
      <p className="text__description">
        Hola, soy Software Developer con mucha experiencia trabajando en equipo
        y liderándolos, me gusta mucho aprender y resolver problemas de manera
        analítica.
      </p>
      <div className="container__button">
        <button className="btn__primary">Descargar CV</button>
      </div>
    </div>
  );
};

export default StartPage;
