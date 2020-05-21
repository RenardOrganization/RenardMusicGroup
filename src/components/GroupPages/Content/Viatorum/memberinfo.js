import React from 'react';
import { Grid, Paper} from '@material-ui/core';
import memberinfo from './directory.js'


export default class MemberInfo extends React.Component {
  render() {
    let index = this.props.index
    return (
        <Grid container 
        justify="space-around"
        className="GroupPage_Content_Row">
        
          <Grid item xs="10" sm="3" lg="2">
            <img src={memberinfo[index].img} className="Fit_image" />
          </Grid>
          <Grid item xs="10" sm="7" lg="8">
            <h1 className="Text_Light">{memberinfo[index].name} ({memberinfo[index].instr})</h1>
            <p className="Text_Light">{memberinfo[index].info}</p>
          </Grid>
        
        </Grid>
    )
  }
}