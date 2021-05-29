import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";
import SignUp2 from "./screens/SignUp2";
import CreateHappening from "./screens/CreateHappening";
import CreateHappeningDateTime from "./screens/CreateHappeningDateTime";
import CreateHappeningLocation from "./screens/CreateHappeningLocation";
import CreateHappeningCategories from "./screens/CreateHappeningCategories";
import CreateHappeningOfferings from "./screens/CreateHappeningOfferings";
import CreateHappeningClosing from "./screens/CreateHappeningClosing";
import "./style.css";
import { ThemeProvider } from "@material-ui/styles";


import {
  AppBar,
  CssBaseline,
  Typography,
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

        <Route path="/HomeScreen/" exact component={HomeScreen} />

        <Route path="/" exact component={Login} />
        <Route path="/Login/" exact component={Login} />

        <Route path="/SignUp/" exact component={SignUp} />
        <Route path="/SignUp2/" exact component={SignUp2} />

        <Route path="/CreateHappening/" exact component={CreateHappening} />
        <Route path="/CreateHappeningDateTime/" exact component={CreateHappeningDateTime} />
        <Route path="/CreateHappeningLocation/" exact component={CreateHappeningLocation} />
        <Route path="/CreateHappeningCategories/" exact component={CreateHappeningCategories} />
        <Route path="/CreateHappeningOfferings/" exact component={CreateHappeningOfferings} />
        <Route path="/CreateHappeningClosing/" exact component={CreateHappeningClosing} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
