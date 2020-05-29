import React from 'react';
import { Grid, Button } from '@material-ui/core';

export default function Footer () {
    return (
        <Grid container 
        style={{backgroundColor: '#282c34'}}
        justify="space-around"
        alignItems="center"
        className="GroupPage_Content_Row" 
        xs={12}
        >
            <h3>
                For Bookings, Contact:
            </h3>
            <br/>
            <p>
            Email: <a href="mailto:"> Email@Example.com</a>
            Phone: 111-111-1111
            </p>

        </Grid>
    );
}
