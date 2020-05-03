import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          {/*-------------------- PROJECT  1------------------------REACT--------------------*/}
          <Card shadow={5} style={{ width: "400px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "190px",
                background:
                  "url(https://lh3.googleusercontent.com/proxy/gmcE84tEbz9-EkhGhW1dJkSAsmP2KRDMbYzAh0RDOJF9gIMfMlqp_ejL_rmbWa5JGCkVWMN0nUZFQVLbfzHPtprhHYQPiDAM_yfgGMN8nl9Oipy7rCSmY1YmwGHzRnAVS5B4R3Q3XU7Oe5Wyk9BDMEZi5hgH5oPXf3Dn4PPqMfPCl2Am) center / cover"
              }}
            >
              Port Folio Website
            </CardTitle>
            <CardText>
              This is a website which has my portfolio. Hope you came here from
              Github!!
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/*-------------------- PROJECT  END------------------*/}

          {/*-------------------- PROJECT  2--------------------REACT--------------*/}
          <Card shadow={5} style={{ width: "400px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "190px",
                background:
                  "url(https://lh3.googleusercontent.com/proxy/gmcE84tEbz9-EkhGhW1dJkSAsmP2KRDMbYzAh0RDOJF9gIMfMlqp_ejL_rmbWa5JGCkVWMN0nUZFQVLbfzHPtprhHYQPiDAM_yfgGMN8nl9Oipy7rCSmY1YmwGHzRnAVS5B4R3Q3XU7Oe5Wyk9BDMEZi5hgH5oPXf3Dn4PPqMfPCl2Am) center / cover"
              }}
            >
              React Project 2
            </CardTitle>
            <CardText>
              This is supposed to be an e-commerse website. Hire me if you want
              me to design one for you!!!
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/*-------------------- PROJECT  END------------------*/}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="project-grid">
          {/*-------------------- PROJECT  1------------------------JAVA--------------------*/}
          <Card shadow={5} style={{ width: "400px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "190px",
                background:
                  "url(https://lh3.googleusercontent.com/proxy/JXPT_3ECtrmVV8NpYKjFsOgf7Z2qOXzcsHlYuhVQe0xvrUlcNpZM1rCc9Xl7DL9AK_Nef_cfgFyQfbI6dsFd2YmmpEsHLTye71-xogQBRIiJ-0Og-puRUV8I_4A) center / cover"
              }}
            >
              Time converter
            </CardTitle>
            <CardText>
              Porblem working with clients all over the globe! Fear not for I
              have come up with a handy time converter for commonly used clocks
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/*-------------------- PROJECT  END------------------*/}

          {/*-------------------- PROJECT  2--------------------JAVA--------------*/}
          <Card shadow={5} style={{ width: "400px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "190px",
                background:
                  "url(https://lh3.googleusercontent.com/proxy/JXPT_3ECtrmVV8NpYKjFsOgf7Z2qOXzcsHlYuhVQe0xvrUlcNpZM1rCc9Xl7DL9AK_Nef_cfgFyQfbI6dsFd2YmmpEsHLTye71-xogQBRIiJ-0Og-puRUV8I_4A) center / cover"
              }}
            >
              Java Project 2
            </CardTitle>
            <CardText>
              Something in Java! Give me some time. Once I make something, I
              will update
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/*-------------------- PROJECT  END------------------*/}
        </div>
      );
    } else {
      return (
        <div className="project-grid">
          {/*-------------------- PROJECT  1------------------------PYTHON--------------------*/}
          <Card shadow={5} style={{ width: "400px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "190px",
                background:
                  "url(https://www.xploreitcorp.com/wp-content/uploads/2017/10/python-logo-3.6-460x276.gif) center / cover"
              }}
            >
              Python Project 1
            </CardTitle>
            <CardText>
              Something in Python! Give me some time. Once I make something, I
              will update
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/*-------------------- PROJECT  END------------------*/}

          {/*-------------------- PROJECT  2--------------------PYTHON--------------*/}
          <Card shadow={5} style={{ width: "400px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "190px",
                background:
                  "url(https://www.xploreitcorp.com/wp-content/uploads/2017/10/python-logo-3.6-460x276.gif) center / cover"
              }}
            >
              Python Project 2
            </CardTitle>
            <CardText>
              Something in Python! Give me some time. Once I make something, I
              will update
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/*-------------------- PROJECT  END------------------*/}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JAVA</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
