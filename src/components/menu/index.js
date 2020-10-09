import React from 'react'

import {
    IconButton
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home'

import './index.css'

export default function Menu() {

    return (
        <nav>
            <li>
                <IconButton href={"/"} className="btn-link btn-home">
                    <HomeIcon className="btn-link" color="secondary" />&nbsp;Home
                </IconButton>
            </li>
            <li>
                <a className="btn-link" href="/">Blog</a>
            </li>
            <li>
                <a className="btn-link" href="/">Mentoría</a>
            </li>
        </nav>
    )

}
