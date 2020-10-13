import React from 'react'

import './index.css'

import StartPage from "./components/startPage"
import AboutMe from "./components/aboutMe"
import Footer from "./components/footer"

export default function Home() {

    return (
      <div>
        <div className="all-page">
          <StartPage/>
        </div>
        <div className="all-page bg-dark">
          <AboutMe/>
        </div>
        <div className="">
          <Footer/>
        </div>
      </div>
    )

}
