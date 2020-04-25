import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

import Landing from "./components/landingpage";

class App extends Component {
  render() {
    return <Landing />;
  }
}

export default App;
