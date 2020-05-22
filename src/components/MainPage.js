import React from 'react';
import { Grid } from '@material-ui/core';
import BQ from "./GroupContainers/BohemianQuartet"
import Via from "./GroupContainers/Viatorum"
import Merch from './Merch';
import '../App.css';

export default function MainPage() {
  return (
    <div>
      <Grid 
        container
        direction ="row"
        justify="space-around"
        alignItems="stretch">
          <BQ/>
          <Via/>
          <Merch/>

      </Grid>
    </div>
  );
}


