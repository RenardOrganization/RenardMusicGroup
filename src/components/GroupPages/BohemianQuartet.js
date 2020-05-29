import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './groupPages.css';
import Header from './Content/BohemianQuartet/Header'
import Schedule from './Content/BohemianQuartet/Showtimes'

import MemberInfo from './Content/BohemianQuartet/memberinfo.js'


export default function App() {
  return (
    <div>
      <Grid container
        direction="column" spacing={0} alignItems="center" className="GroupPage_Content_Row">
      {/* Band Header: Logo, EPK, Download */}
      <Header/>

      <Grid container 
      className="GroupPage_Content_Row"
      style={{backgroundColor: ''}}
      direction="row"
      justify="center"
      xs={10}>
        <Grid xs={12}>
          <h2> Albums</h2>
        </Grid>
        <Grid className="Spotify_Embed">
          <iframe src="https://open.spotify.com/embed/album/6LY5KTIAguU6rI2lUbwJaN" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Grid>
        <Grid className="Spotify_Embed">
          <iframe src="https://open.spotify.com/embed/album/1XlRl7o56eVi8qIkoqISop" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Grid>
      </Grid>
      
      {/* Showtimes */}
      <Schedule/>
      
      
      {/* Start of performer info boxes */}
      <Grid container
      style={{backgroundColor: ''}}
      direction="column"
      className="GroupPage_Content_Row"
      xs={10}>
        <MemberInfo index="3"/>
        <MemberInfo index="0"/>
        <MemberInfo index="1"/>
        <MemberInfo index="2"/>
      </Grid>
      </Grid>
    </div>
    
  );
}