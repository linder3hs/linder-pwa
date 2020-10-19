import React from 'react'
import Menu from './components/menu'
import Footer from './components/home/components/footer'
import Home from './components/home'
import Blog from "./components/blog"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css'

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Menu />
                    <Switch>
                        <Route exact path="/">
                            <header className="App-header">
                                <Home />
                            </header>
                        </Route>
                        <Route exact path="/blog">
                            <Blog />
                        </Route>
                    </Switch>
                    <div style={{ marginTop: 30 }}>
                        <Footer />
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
