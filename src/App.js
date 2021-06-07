import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";
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

        <Route path="/home/" exact component={HomeScreen} />

        <Route path="/create" component={CreateHappening} />
        
        <Route path="/SignUp/" exact component={SignUp} />
        <Route path="/Login/" exact component={Login} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
