import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";
import SignUp2 from "./screens/SignUp2";

import TestComponents from "./screens/TestComponents";
import CreateHappening from "./screens/CreateHappening";
import "./style.css";
import { ThemeProvider } from "@material-ui/styles";


import {
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#34E7E4'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  spacing: 10
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/create/" exact component={CreateHappening} />
        <Route path="/test/" exact component={TestComponents} />
        <Route path="/HomeScreen/" exact component={HomeScreen} />

        <Route path="/SignUp/" exact component={SignUp} />
        <Route path="/Login/" exact component={Login} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
