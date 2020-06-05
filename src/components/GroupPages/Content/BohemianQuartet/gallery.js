import React from 'react';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import directory from './directory';
import viaLogo from '../../../../img/BohemianQuartet/Logo.JPG'

export default function App() {
    return (
        <Grid item container 
          justify="space-around"
          alignItems="center"
          className="GroupPage_Content_Row" 
          >
            <GridList cellHeight={150} cols={4}>
                {directory.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
                        <img src={tile.img} alt={tile.name} />
                    </GridListTile>
                ))}
            </GridList>
        </Grid>
    );
}