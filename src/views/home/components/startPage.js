import React from "react";

export default function StartPage() {
  return (
    <div className="container__home">
      <h1 className="title__home">Linder Hassinger</h1>
      <h4 className="subtitle">Lead Software Developer</h4>
      <p className="text__description">
        Hola, soy Software Developer con mucha experiencia trabajando en equipo
        y liderándolos, me gusta mucho aprender y resolver problemas de manera
        analítica.
      </p>
      <div className="container__button">
        <button className="btn__primary">Descargar CV</button>
        <button className="btn__secondary">LinkdIn</button>
      </div>
    </div>
  );
}
