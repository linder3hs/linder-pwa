import React from "react";

import "./index.css";

import StartPage from "./components/startPage";
import AboutMe from "./components/aboutMe";

export default function Home() {
  return (
    <header className="App-header">
      <div>
        <div className="all-page">
          <StartPage />
        </div>
        <div className="bg__dark">
          <AboutMe />
        </div>
      </div>
    </header>
  );
}
