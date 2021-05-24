import React from "react";
import Home from "./views/home";
import Blog from "./views/blog";
import Layout from "./layout";
import NotFound from "./views/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
