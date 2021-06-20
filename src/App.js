import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";
import SignUp2 from "./screens/SignUp2";

import Overview from "./screens/Overview";
import CreateHappening from "./screens/CreateHappening";
import "./style.css";
import { ThemeProvider } from "@material-ui/styles";


import {
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  spacing: 10
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/create/" exact component={CreateHappening} />
        <Route path="/" exact component={Overview} />

        <Route path="/register/" exact component={SignUp} />
        <Route path="/login/" exact component={Login} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
