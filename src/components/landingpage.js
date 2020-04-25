import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Resume from "./resume";
import Projects from "./projects";
import About from "./aboutme";
import Contact from "./contact";
import Default from "./default";
import { Switch, Route } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout>
            <Header title="HOME" scroll>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Switch>
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={Default} />
              </Switch>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Landing;
