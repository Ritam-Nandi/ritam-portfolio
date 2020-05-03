import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import Main from "./components/mains";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title=" " scroll>
            <Navigation>
              <Link to="/">
                <div className="header-font">Home</div>
              </Link>
              <Link to="/resume">
                <div className="header-font">Resume</div>
              </Link>
              <Link to="/about">
                <div className="header-font">About Me</div>
              </Link>
              <Link to="/projects">
                <div className="header-font">Projects</div>
              </Link>
              <Link to="/contact">
                <div className="header-font">Contact</div>
              </Link>
            </Navigation>
          </Header>
          <Drawer title=" ">
            <Navigation>
              <Link to="/">
                <div className="header-font">Home</div>
              </Link>
              <Link to="/resume">
                <div className="header-font">Resume</div>
              </Link>
              <Link to="/about">
                <div className="header-font">About Me</div>
              </Link>
              <Link to="/projects">
                <div className="header-font">Projects</div>
              </Link>
              <Link to="/contact">
                <div className="header-font">Contact</div>
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
