import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './index.css'
import './styles/project-theme.css'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <LoginComponent />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
