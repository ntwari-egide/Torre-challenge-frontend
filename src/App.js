import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginComponent from './views/Login/Login';
import './index.css'
import './styles/project-theme.css'
import './assets/font/stylesheet.css'
import 'bootstrap/dist/css/bootstrap.css';
import SignupComponent from './views/Login/Signup';
import WelcomeDashboard from './views/dashboard/welcome-dashboard';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route path="/signup" component={SignupComponent}/>
          <Route path="/dashboard" component={WelcomeDashboard} />
        </Switch>
    </Router>
  );
}

export default App;
