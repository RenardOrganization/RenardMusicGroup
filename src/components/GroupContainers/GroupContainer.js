import React from 'react';
import { Grid, Paper} from '@material-ui/core';
import {Link} from "react-router-dom"; 


export default class GroupContainer extends React.Component {
  render() {
    return (
      <Grid container className="Group-container" direction="row" md="6" lg="4" alignItems="center">
        <Paper>
          <Link to={this.props.url}>
            <Grid item className="Group-container-item" >
              <img src={this.props.logo} className="Container_img" alt={this.props.name} />
            </Grid>
          </Link>
        </Paper>
      </Grid>
    )
  }
}