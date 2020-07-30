import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Containers/Profile";
import "./App.css";
function App() {
  return (
    <Router>
        <Switch>
        <Route path="/" exact component={Profile} />
        </Switch>
      </Router>
  );
}

export default App;
