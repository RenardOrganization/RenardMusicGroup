import React from 'react';
import { Grid, Button, Paper} from '@material-ui/core';
import viaLogo from '../../../../img/BohemianQuartet/Logo.JPG'

export default function App() {
    return (
        <Grid container
        style={{backgroundColor: ''}}
        direction="column"
        className="GroupPage_Content_Row"
        xs={11}
        spacing={2}
        >
          <Grid item style={{justifyContent: 'center'}} xs={12}>
            <h2 text-align="center" color="white">Events</h2>
          </Grid>

          <Grid item className="showtimes" xs={12}>
              <Paper elevation={1}>
                <Grid container justify="space-between">
                  <Grid item>
                    January 1st, 2020 <br/>
                    San Antonio, Texas
                  </Grid>
                  <Grid item align="center">
                    <Button variant="contained" color="Primary">Get Tickets</Button>
                  </Grid>
                  
                </Grid>
              </Paper>
          </Grid>
          <Grid item className="showtimes" xs={12}>
              <Paper elevation={1}>
                <Grid container justify="space-between">
                  <Grid item>
                    January 1st, 2020 <br/>
                    San Antonio, Texas
                  </Grid>
                  <Grid item align="center">
                    <Button variant="contained" color="Primary">Get Tickets</Button>
                  </Grid>
                  
                </Grid>
              </Paper>
          </Grid>
          <Grid item className="showtimes" xs={12}>
              <Paper elevation={1}>
                <Grid container justify="space-between">
                  <Grid item>
                    January 1st, 2020 <br/>
                    San Antonio, Texas
                  </Grid>
                  <Grid item align="center">
                    <Button variant="contained" color="Primary">Get Tickets</Button>
                  </Grid>
                  
                </Grid>
              </Paper>
          </Grid>
        </Grid>
    );
}