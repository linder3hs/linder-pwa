import React from 'react'
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import YouTubeIcon from "@material-ui/icons/YouTube"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"

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
                <a target="_blank" href="https://github.com/linder3hs">
                    <GitHubIcon/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/linderhassinger/">
                    <LinkedInIcon/>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCPAg4A1jRtkY3lPdGKGS2Vg">
                    <YouTubeIcon/>
                </a>
                <a target="_blank" href="https://twitter.com/linder3hs">
                    <TwitterIcon/>
                </a>
                <a target="_blank" href="https://www.instagram.com/linder3hs/">
                    <InstagramIcon/>
                </a>
            </div>
        </div>
    )

}
