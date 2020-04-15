import React from 'react';
import { Grid } from '@material-ui/core';
import {Link} from "react-router-dom"; 
import GC from './GroupContainer';
import Images from "../../img/MainPageImages";

export default class Viatorium extends React.Component {
    render() {
        const index = 1;
        return (
            <GC 
            logo={Images[index].logo}
            photo={Images[index].photo}
            url={Images[index].pageURL}
            name={Images[index].name}/>
        )
    }
}