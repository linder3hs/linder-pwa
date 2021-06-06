import React from "react";
import JS from "assets/photos/js.png";
import Laravel from "assets/photos/laravel.png";
import Node from "assets/photos/node.png";
import ReactImage from "assets/photos/react.png";

import "./index.css";

const Skills = () => {
  return (
    <>
      <div className="container__skills">
        <div className="bg__grandient">
          <img className="logo__tec" src={JS} />
        </div>
        <div className="bg__yellow">
          <img className="logo__tec" src={Laravel} />
        </div>
        <div className="bg__blue">
          <img className="logo__tec" src={Node} />
        </div>
        <div className="bg__">
          <img className="logo__tec" src={ReactImage} />
        </div>
      </div>
    </>
  );
};

export default Skills;
