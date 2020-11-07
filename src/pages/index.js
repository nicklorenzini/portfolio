import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import HomePage from "./HomePage/HomePage.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import AboutPage from "./AboutPage/AboutPage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import BlogPage from "./BlogPage/BlogPage.jsx";
import Nope from "./404";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/" component={HomePage} />
      <Route path="/404" component={Nope} />
    </Switch>
  </Router>
);
