import React, { Component, useState, useEffect, useRef } from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

import Profile from "./screens/Profile";
import HappeningList from "./screens/HappeningList";
import HappeningApplied from "./screens/HappeningApplied";
import HappeningGuests from "./screens/HappeningGuests";
import Overview from "./screens/Overview";
import CreateHappening from "./screens/CreateHappening";
import "./style.css";
import { ThemeProvider } from "@material-ui/styles";
import {getUser} from './api'

import {
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#34E7E4',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#e73490',
    },
  },
  spacing: 20
});

function App() {
  
  const [user, setUser] = useState('');

  useEffect(() => {
      getUser().then(response => {
          setUser(response)
        })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/create/" exact component={CreateHappening} />
        <Route path="/" exact component={Overview} />

        <Route path="/profile/" exact component={() => <Profile user={user}/>} 
        />

        <Route path="/happeninglist/" exact component={HappeningList} />

        <Route path="/happening/applied" exact component={HappeningApplied} />
        <Route path="/happening/created" exact component={HappeningGuests} />

        <Route path="/register/" exact component={SignUp} />
        <Route path="/login/" exact component={Login} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
