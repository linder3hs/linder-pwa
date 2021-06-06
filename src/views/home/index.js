import React from "react";
import StartPage from "./components/startPage";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";

import "./index.css";

const Home = () => {
  return (
    <>
      <StartPage />
      <AboutMe />
      {/* <Skills /> */}
    </>
  );
};

export default Home;
