import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import GroupCont from './GroupContainers/GroupContainer';
import RMGLogo from '../img/RMG_Logo_White_NoText.png'
import '../App.css';
import MainPage from './MainPage';
import BohemianQuartet from './GroupPages/BohemianQuartet';
import Header from './Header';
import Viatorium from './GroupPages/Viatorium';

export function App() {
  return (
    <Router>
        <div>
          <Header/>
          <Route exact path="/">
              <MainPage />
            </Route>
          <Switch>
            <Route path="/BohemianQuartet">
              <BohemianQuartet />
            </Route>
            <Route path="/Viatorium">
              <Viatorium />
            </Route>
            
          </Switch>
        </div>
      </Router>
  );
}
