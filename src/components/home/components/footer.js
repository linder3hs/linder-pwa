import React from 'react'
import {
    Container,
    Grid
} from '@material-ui/core'
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"

export default function Footer() {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <Container maxWidth="lg">
            <Grid spacing={3} container className="text-left">
                <Grid item md={4} xs={12}>
                    <h6 className="text-light">© Linder Hassinger { year }</h6>
                    <div>
                        <a target="_blank" href="https://github.com/linder3hs">
                            <GitHubIcon/>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/linderhassinger/">
                            <LinkedInIcon/>
                        </a>
                        <a target="_blank" href="https://twitter.com/linder3hs">
                            <TwitterIcon/>
                        </a>
                    </div>
                </Grid>
                <Grid item md={4} xs={12}>
                    <h3 className="text-underline">Contacto</h3>
                    <a className="text-link text-small" href="mailto:linderhassinger00@gmail.com">linderhassinger00@gmail.com</a>
                </Grid>
                <Grid item md={4} xs={12}>
                    <h3 className="text-underline">Consultora</h3>
                    <a className="text-link text-small" href="https://delab.dev/">delab.dev</a>
                </Grid>
            </Grid>
        </Container>
    )
}
