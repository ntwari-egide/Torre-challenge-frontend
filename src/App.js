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
import AppointmentsDashboard from './views/Appointments';
import StaffsDashboard from './views/Staff';
import ReportComponent from './views/Reports';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route path="/" exact component={LoginComponent}/>
          <Route path="/signup" component={SignupComponent}/>
          <Route path="/dashboard" component={WelcomeDashboard} />
          <Route path="/appointments" component={AppointmentsDashboard} />
          <Route path="/staffs" component={StaffsDashboard} />
          <Route path="/Reports" component={ReportComponent} />
        </Switch>
    </Router>
  );
}

export default App;
