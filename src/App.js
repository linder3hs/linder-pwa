import React, { Suspense, lazy } from "react";
import Layout from "./layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                exact
                path="/"
                component={lazy(() => import("./views/home"))}
              />
              <Route
                exact
                path="/blog"
                component={lazy(() => import("./views/blog"))}
              />
              <Route
                path="/profile"
                component={lazy(() => import("./views/profile"))}
              />
              <Route
                path="/404"
                component={lazy(() => import("./views/NotFound"))}
              />
              <Redirect from="*" to="/404" />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
