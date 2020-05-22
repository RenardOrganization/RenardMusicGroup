import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../App.css';
import BohemianQuartet from './GroupPages/BohemianQuartet';
import Viatorum from './GroupPages/Viatorum';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';

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
            <Route path="/Viatorum">
              <Viatorum />
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}
