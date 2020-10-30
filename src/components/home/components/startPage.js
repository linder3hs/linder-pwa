import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import YouTubeIcon from "@material-ui/icons/YouTube"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

export default function StartPage() {

    return (
        <div>
           <img
                className="img-profile"
                src="https://avatars0.githubusercontent.com/u/20673011?s=460&u=313cb18dc7dcb95126b81d45315529ebcb257053&v=4"
                alt=""/>
            <h1>Linder Hassinger</h1>
            <p>Sofware Developer</p>
            <div>
                <Link target="_blank" to={{
                    pathname: "https://github.com/linder3hs"
                }}>
                    <GitHubIcon/>
                </Link>
                <Link target="_blank" to={{
                    pathname: "https://www.linkedin.com/in/linderhassinger/"
                }}>
                    <LinkedInIcon/>
                </Link>
                <Link target="_blank" to={{
                    pathname: "https://www.youtube.com/channel/UCPAg4A1jRtkY3lPdGKGS2Vg"
                }}>
                    <YouTubeIcon/>
                </Link>
                <Link target="_blank" to={{
                    pathname: "https://twitter.com/linder3hs"
                }}>
                    <TwitterIcon/>
                </Link>
                <Link target="_blank" to={{
                    pathname: "https://www.instagram.com/linder3hs/"
                }}>
                    <InstagramIcon/>
                </Link>
            </div>
            <div className="container">
                <div className="arrow-holder">
                    <div id="arrow" className="circle bounce" data-target="#introText">
                        <a href="#content">
                            <KeyboardArrowDownIcon color="white" fontSize="large" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}
