import React from 'react';
import { Grid, Button } from '@material-ui/core';
import viaLogo from '../../../../img/BohemianQuartet/Logo.JPG'

export default function App() {
    return (
        <Grid container 
          style={{backgroundColor: ''}}
          justify="space-around"
          alignItems="center"
          className="GroupPage_Content_Row" 
          xs={12}
          >
          
          <Grid item container 
            direction="column"
            justify="space-around"
            alignItems="center"
            id="GroupPageLogo"
            xs="10" md="3">
            <Grid item>
            <p>
              "Violinist Stan Renard is a highly accomplished player and has the csardas and hora styles at his fingertips [...] the performances are very enjoyable [...] the musicians play up quite a storm."
            </p>
            <h3 className="text_right">STRAD Magazine</h3><br/>
            </Grid>
            <Grid item>
              <img src={viaLogo} className="Logo" alt="Bohemian Quartet Logo"/>
            </Grid>
            <Grid item>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <a href="https://www.facebook.com/bohemianquartet/" class="fa fa-facebook fa-4x"></a>
              <a href="#" class="fa fa-instagram  fa-4x"></a>
            </Grid>
            <Grid item>
              <Button variant="contained">Download EPK</Button>
            </Grid>
          </Grid>

        {/* Video Embed */}
        <Grid item xs="12" md="7" className="Video_Embed_Wide">
            <iframe title="Viatorum Performs Shallalat (Waterfalls)"
              className="Video_Embed_iFrame"
              src="https://www.youtube-nocookie.com/embed/A-7aK7fXASs" 
              frameborder="0"
              allowfullscreen/>
        </Grid>
        <Grid item xs="12" md="6" className="Video_Embed_Wide">
            <iframe title="Viatorum Performs Shallalat (Waterfalls)"
              className="Video_Embed_iFrame"
              src="https://www.youtube-nocookie.com/embed/4rnHJUNc4Ek" 
              frameborder="0"
              allowfullscreen/>
        </Grid>
      </Grid>
    );
}