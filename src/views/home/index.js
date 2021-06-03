import React from "react";
import StartPage from "./components/startPage";
import AboutMe from "./components/aboutMe";
import { Container, Grid } from "@material-ui/core";

import "./index.css";

export default function Home() {
  return (
    <>
      <StartPage />
      <AboutMe />
    </>
  );
}
