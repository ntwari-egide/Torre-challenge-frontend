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

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <UsersSkillsMainComponent />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
