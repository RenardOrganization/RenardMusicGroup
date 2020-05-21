import React from 'react';
import { Grid, Button } from '@material-ui/core';
import viaLogo from '../../../../img/BohemianQuartet/Logo.JPG'

export default function App() {
    return (
        <Grid container 
          style={{backgroundColor: '#282c34'}}
          justify="space-around"
          alignItems="center"
          className="GroupPage_Content_Row" 
          xs={10}
          >
          
          <Grid item container 
            direction="column"
            justify="space-around"
            alignItems="center"
            id="GroupPageLogo"
            xs="10" md="3">
            <Grid item>
              <img src={viaLogo} className="Logo" alt="Bohemian Quartet Logo"/>
            </Grid>
            <Grid item>
              <Button variant="contained">Download EPK</Button>
            </Grid>
          </Grid>

        {/* Video Embed */}
        <Grid item xs="10" md="7" className="Video_Embed">
            <iframe title="Viatorum Performs Shallalat (Waterfalls)"
              className="Video_Embed_iFrame"
              src="https://www.youtube-nocookie.com/embed/9nCAgcehC1I" 
              frameborder="0"
              allowfullscreen/>
        </Grid>
      </Grid>
    );
}