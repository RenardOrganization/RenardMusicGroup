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
                <img src={viaLogo} className="Logo" alt="Viatorum Logo"/>
              </Grid>
              <Grid item>
                <Button variant="contained">Download EPK</Button>
              </Grid>
            </Grid>

          {/* Video Embed */}
          <Grid item xs="10" md="7" className="Video_Embed">
            <iframe className="Video_Embed_iFrame"
              src="https://www.youtube-nocookie.com/embed/NRrlSSNz738" 
              frameborder="0"
              allowfullscreen/>
          </Grid>
        </Grid>
    );
}