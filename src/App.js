import React from "react";
import Home from "./components/home"
import Blog from "./components/blog"
import Layout from './components/layout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Layout>
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
          </Layout>
        </div>
      </Router>
    </div>
  );
}

export default App;
