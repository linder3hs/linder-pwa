import React from 'react'
import Menu from '../menu'
import Footer from "../home/components/footer";

const Layout = props => {

    return (
        <div className="bg__footer">
            <Menu />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
