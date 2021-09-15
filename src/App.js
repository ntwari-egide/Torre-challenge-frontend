import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginComponent from './views/Login';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
