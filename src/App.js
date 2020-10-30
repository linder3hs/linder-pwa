import React from "react";
import Home from "./components/home"
import Blog from "./components/blog"
import Layout from './components/layout'
import NotFound from "./components/Views/NotFound"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route path="/404" component={NotFound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </Layout>
        </div>
      </Router>
    </div>
  );
}

export default App;
