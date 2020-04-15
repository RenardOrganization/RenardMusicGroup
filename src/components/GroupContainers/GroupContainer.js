import React from 'react';
import { Grid } from '@material-ui/core';
import {Link} from "react-router-dom"; 


export default class GroupContainer extends React.Component {
    render() {
        return (
            <Grid container className="Group-container" direction="column" md="6" lg="3">
                <Link to={this.props.url}>
                    <img src={this.props.logo} className="Group-logo" alt={this.props.name} />
                    <img src={this.props.photo} className="Group-image" alt ={this.props.name} />
                </Link>
            </Grid>
            
        )
    }
}