import React from 'react';
import { Grid, Button, Divider } from '@material-ui/core';
import './groupPages.css';
import viaLogo from '../../img/BohemianQuartet/Logo.JPG'
import MemberInfo from './Content/BohemianQuartet/memberinfo.js'


export default function App() {
  return (
    <div>
      {/* Band Header: Logo, EPK, Download */}
      <Grid container 
        justify="space-around"
        alignItems="center"
        className="GroupPage_Content_Row" 
        >
        
        <Grid item xs="10" md="3" spacing={2}>
          <Grid container 
          direction="row"
          justify="space-between"
          alignItems="center" spacing={2}>
            <Grid item>
              <img src={viaLogo} className="Logo" alt="Viatorum Logo"/>
            </Grid>
            <Grid container justify="center" padding="100px">
              <Button variant="contained">Download EPK</Button>
            </Grid>
          </Grid>
        </Grid>
        {/* Video Embed */}
        <Grid item xs="10" md="7" className="Video_Embed">
          <iframe title="Viatorum Performs Shallalat (Waterfalls)" width="560" height="315" justify="center"
          flex="0"
            src="https://www.youtube-nocookie.com/embed/9nCAgcehC1I" 
            frameborder="0"
            allow="accelerometer;
            autoplay;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            allowfullscreen/>
        </Grid>
      </Grid>

      <Divider />
      <Divider />

      
      <Divider />
      
      {/* Showtimes */}
      <Grid container height="2vh" className="GroupPage_Content_Row">
        <Grid item className="showtimes">
          <h3>Events</h3>
          <p>Can go here</p>

        </Grid>
      </Grid>
      
      <Divider />
      
      {/* Start of performer info boxes */}
      <Grid container
      direction="column" className="GroupPage_Content_Row">

        {/* Individual Performer */}
        <MemberInfo index="3"/>
        <MemberInfo index="0"/>
        <MemberInfo index="1"/>
        <MemberInfo index="2"/>
      </Grid> {/* End of performer info boxes */}

    </div>
    
  );
}

function stringToHTML(str)
{
  // var parser = new DOMParser();
  // var doc = parser.parseFromString(str, 'text/html');
  // return doc.body;

  var dom = document.createElement('div');
  dom.innerHTML = str;
  return {dom};
}