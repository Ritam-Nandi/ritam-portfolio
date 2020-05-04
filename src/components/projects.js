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
                  "url(https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/95378051_101810151530983_7801002039491690496_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=idGb0D75oIEAX-Glfv2&_nc_ht=scontent.fblr8-1.fna&oh=1b0d692e3c04aabeaee6ee3d9038adcb&oe=5ED3FD6C) center / cover"
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
                  "url(https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/95378051_101810151530983_7801002039491690496_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=idGb0D75oIEAX-Glfv2&_nc_ht=scontent.fblr8-1.fna&oh=1b0d692e3c04aabeaee6ee3d9038adcb&oe=5ED3FD6C) center / cover"
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
                  "url(https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/95703843_101808631531135_9042260378448297984_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=114fCSwg1JoAX_0haG3&_nc_ht=scontent.fblr8-1.fna&oh=7f66e749db1177bcc7fa7518139fcf6e&oe=5ED43EAE) center / cover"
              }}
            >
              Time converter
            </CardTitle>
            <CardText>
              Problem working with clients all over the globe? Fear not for I
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
                  "url(https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/95703843_101808631531135_9042260378448297984_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=114fCSwg1JoAX_0haG3&_nc_ht=scontent.fblr8-1.fna&oh=7f66e749db1177bcc7fa7518139fcf6e&oe=5ED43EAE) center / cover"
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
                  "url(https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/95511384_101812421530756_8762202470362382336_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=S5MZ7qDrmecAX_Fg6N7&_nc_ht=scontent.fblr8-1.fna&oh=ff023e48d112004868c1fe5b59a1584e&oe=5ED623B9) center / cover"
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
                  "url(https://scontent.fblr8-1.fna.fbcdn.net/v/t1.0-9/95511384_101812421530756_8762202470362382336_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=S5MZ7qDrmecAX_Fg6N7&_nc_ht=scontent.fblr8-1.fna&oh=ff023e48d112004868c1fe5b59a1584e&oe=5ED623B9) center / cover"
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
