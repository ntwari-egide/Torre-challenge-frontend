import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.css'
import './styles/project-theme.css'
import UsersSkillsMainComponent from './views/UsersSkills';
import SkillsDetailsMainComponent from './views/SkillsDetails';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <UsersSkillsMainComponent />
          </Route>

          <Route path="/skills-details">
            <SkillsDetailsMainComponent />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
