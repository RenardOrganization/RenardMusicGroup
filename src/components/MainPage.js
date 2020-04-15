import React from 'react';
import { Grid } from '@material-ui/core';
import GroupCont from './GroupContainers/GroupContainer';
import BQ from "./GroupContainers/BohemianQuartet"
import Via from "./GroupContainers/Viatorium"
import '../App.css';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function MainPage() {
  return (
    <div>
      {/*<Header/>*/}
      
      <Grid 
        container
        direction ="row"
        justify="space-around"
        alignItems="center">
          <BQ/>
          <Via/>

      </Grid>
    </div>
    
  );
}


