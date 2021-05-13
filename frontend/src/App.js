import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/Login/" exact component={Login} />
      <Route path="/SignUp/" exact component={SignUp} />
      <Route path="/HomeScreen/" exact component={HomeScreen} />
    </Router>
  );
}

export default App;
