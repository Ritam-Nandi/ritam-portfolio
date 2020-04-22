import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout>
            <Header title="HOME" scroll>
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Landing;
