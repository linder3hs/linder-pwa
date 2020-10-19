import React from 'react'

import './index.css'

import StartPage from "./components/startPage"
import AboutMe from "./components/aboutMe"

export default function Home() {

    return (
      <div>
        <div className="all-page">
          <StartPage/>
        </div>
        <div className="all-page bg-dark">
          <AboutMe/>
        </div>
      </div>
    )

}
