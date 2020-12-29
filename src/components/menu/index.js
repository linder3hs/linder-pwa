import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default function Menu() {
  return (
    <nav>
      <li>
        <Link to={"/"} className="btn-link">
          Inicio
        </Link>
      </li>
      <li>
        <Link to={"/"} className="btn-link">
          Proyectos
        </Link>
      </li>
      <li>
        <Link to={"/"} className="btn-link">
          Youtube
        </Link>
      </li>
    </nav>
  );
}
