import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

import Landing from "./components/landingpage";
import Resume from "./components/resume";
import Projects from "./components/projects";
import About from "./components/aboutme";
import Contact from "./components/contact";
import Default from "./components/default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
