import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import '../App.css';
import BohemianQuartet from './GroupPages/BohemianQuartet';
import Viatorum from './GroupPages/Viatorum';
import Merch from './GroupPages/merchandise'
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';

export function App() {
  return (
    <Router basename='/'>
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
            <Route path="/Merchandise">
              <Merch />
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}
