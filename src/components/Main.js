import React, { Component } from "react";
import Landing from "./landingpage";
import Resume from "./resume";
import Projects from "./projects";
import About from "./aboutme";
import Contact from "./contact";
import Default from "./default";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
    );
  }
}

export default Main;
