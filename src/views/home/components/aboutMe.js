import React from "react";
import imageBg from "assets/photos/about.svg";
import clipboard from "assets/icons/clipboard.svg";
import stopWatch from "assets/icons/stopwatch.svg";

export default function AboutMe() {
  return (
    <>
      <div className="about">
        <div>
          <img src={imageBg} className="image_about" alt="weee" />
        </div>
        <div>
          <p className="hello">A Bit</p>
          <h1 className="title">About Me</h1>
          <p className="text__description__about">
            Hola, soy Software Developer con mucha experiencia trabajando en
            equipo y liderándolos, me gusta mucho aprender y resolver problemas
            de manera analítica.
          </p>
          <div style={{ display: "flex" }}>
            <div className="text__project">
              <img alt="" src={clipboard} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>120 + Proyectos</span>
            </div>
            <div className="text__project">
              <img alt="" src={stopWatch} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>5 años + experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
