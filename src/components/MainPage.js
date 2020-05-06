import React from 'react';
import { Grid } from '@material-ui/core';
import BQ from "./GroupContainers/BohemianQuartet"
import Via from "./GroupContainers/Viatorum"
import '../App.css';

export default function MainPage() {
  return (
    <div>
      <Grid 
        container
        direction ="row"
        justify="space-around"
        alignItems="stretch">
          <Via/>
          <BQ/>
          <Via/>
          <BQ/>
          <Via/>
          <BQ/>
      </Grid>
    </div>
  );
}


