import React from 'react';
import { Grid, Button, Card, CardContent, CardMedia, CardActions} from '@material-ui/core';
import viaLogo from '../../../../img/BohemianQuartet/Logo.JPG'

export default function App() {
    return (
        <Grid container
        style={{backgroundColor: '#282c34'}}
        direction="row"
        className="GroupPage_Content_Row"
        xs={11}
        >
          <Grid item style={{justifyContent: 'center'}} xs={12}>
            <h3 text-align="center" color="white">Events</h3>
          </Grid>
          <Grid item className="showtimes" xs={3}>
            <Card variant="outlined">
                <CardMedia>
                <img src={viaLogo} width="100%" alt="Viatorum Logo"/>
                </CardMedia>
                <CardContent>
                    <h3>January 1st, 2020</h3>
                </CardContent>
                <CardActions>
                    <Button size="small">Get Tickets</Button>
                </CardActions>
            </Card>
          </Grid>

          <Grid item className="showtimes" xs={3}>
            <Card variant="outlined">
                <CardMedia>
                <img src={viaLogo} width="100%" alt="Viatorum Logo"/>
                </CardMedia>
                <CardContent>
                    <h3>January 2nd, 2020</h3>
                </CardContent>
                <CardActions>
                    <Button size="small">Get Tickets</Button>
                </CardActions>
            </Card>
          </Grid>

          <Grid item className="showtimes" xs={3}>
            <Card variant="outlined">
                <CardMedia>
                <img src={viaLogo} width="100%" alt="Viatorum Logo"/>
                </CardMedia>
                <CardContent>
                    <h3>January 3rd, 2020</h3>
                </CardContent>
                <CardActions>
                    <Button size="small">Get Tickets</Button>
                </CardActions>
            </Card>
          </Grid>

          <Grid item className="showtimes" xs={3}>
            <Card variant="outlined">
                <CardMedia>
                <img src={viaLogo} width="100%" alt="Viatorum Logo"/>
                </CardMedia>
                <CardContent>
                    <h3>January 4th, 2020</h3>
                </CardContent>
                <CardActions>
                    <Button size="small">Get Tickets</Button>
                </CardActions>
            </Card>
          </Grid>
        </Grid>
    );
}