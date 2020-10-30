import React from 'react'
import Menu from '../menu'
import Footer from "../home/components/footer";

const Layout = props => {

    return (
        <React.Fragment>
            <Menu />
            {props.children}
            <div style={{ marginTop: 30 }}>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Layout
