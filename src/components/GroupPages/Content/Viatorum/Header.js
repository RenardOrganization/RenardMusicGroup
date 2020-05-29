import React from 'react';
import { Grid, Button } from '@material-ui/core';
import viaLogo from '../../../../img/Viatorum/Logo.png'

export default function App() {
    return (
        <Grid item container 
          justify="space-around"
          alignItems="center"
          className="GroupPage_Content_Row" 
          >
          
            <Grid item container 
            direction="column"
            justify="space-around"
            alignItems="center"
            id="GroupPageLogo"
            xs="10" md="3">
              <Grid item>
        <h3>Prone to wander…</h3>
        <p>
          Imagine a jam session swirling in Middle Eastern modes, Western counterpoint, Romani fervor, driving rhythms, and Andalusian flair—and you will begin to understand the musical ambition of Viatorum.
        </p><br/>
        </Grid>
              <Grid item>
                <img src={viaLogo} className="Logo" alt="Viatorum Logo"/>
              </Grid>
              <Grid item>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <a href="https://www.facebook.com/Viatorum-Music-103851897852936/" class="fa fa-facebook"></a>
              <a href="https://www.instagram.com/viatorummusic/" class="fa fa-instagram"></a>
            </Grid>
              <Grid item>
                <Button variant="contained">Download EPK</Button>
              </Grid>
            </Grid>

          {/* Video Embed */}
          <Grid container item xs="10" md="7" className="Video_Embed_Wide" alignItems="center">
            <iframe className="Video_Embed_iFrame"
              src="https://www.youtube-nocookie.com/embed/NRrlSSNz738" 
              frameborder="0"
              allowfullscreen/>
          </Grid>
        </Grid>
    );
}