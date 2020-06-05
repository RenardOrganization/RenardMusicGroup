import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './groupPages.css';
import Header from './Content/BohemianQuartet/Header'
import Schedule from './Content/BohemianQuartet/Showtimes'
import Gallery from './Content/BohemianQuartet/gallery'
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
      justify="space-around"
      xs={10}>
        <Grid xs={12}>
          <h2> Albums</h2>
        </Grid>
        <Grid className="Spotify_Embed">
          <iframe src="https://open.spotify.com/embed/album/6LY5KTIAguU6rI2lUbwJaN" width="400" height="650" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Grid>
        <Grid className="Spotify_Embed">
          <iframe src="https://open.spotify.com/embed/album/1XlRl7o56eVi8qIkoqISop" width="400" height="650" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Grid>
      </Grid>
      <Gallery/>
      {/* Showtimes */}
      <Schedule/>

      </Grid>
    </div>
    
  );
}