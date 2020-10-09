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
                <IconButton href={"/"} className="btn-home">
                    <HomeIcon color="secondary" />&nbsp;Home
                </IconButton>
            </li>
            <li>
                <a href="/">Blog</a>
            </li>
            <li>
                <a href="/">Mentoría</a>
            </li>
        </nav>
    )

}
