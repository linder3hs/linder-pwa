import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { isBrowser, isMobile } from "react-device-detect";

import MenuIcon from "@material-ui/icons/Menu";

import "./index.css";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <li className="menu__icon">
        <MenuIcon onClick={() => setOpen(!open)} />
      </li>
      <li className={open ? "open" : "hide"}>
        <Link to={"/"} className="btn-link">
          Inicio
        </Link>
      </li>
      <li className={open ? "open" : "hide"}>
        <Link to={"/"} className="btn-link">
          Proyectos
        </Link>
      </li>
      <li className={open ? "open" : "hide"}>
        <Link to={"/"} className="btn-link">
          Youtube
        </Link>
      </li>
      <li className={open ? "open" : "hide"}>
        <Link to={"/"} className="btn-link">
          Contacto
        </Link>
      </li>
    </nav>
  );
}
