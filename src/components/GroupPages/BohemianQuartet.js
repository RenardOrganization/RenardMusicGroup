import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './groupPages.css';
import Header from './Content/BohemianQuartet/Header'
import Schedule from './Content/BohemianQuartet/Showtimes'

import MemberInfo from './Content/BohemianQuartet/memberinfo.js'


export default function App() {
  return (
    <div>
      <Grid container
        direction="column" spacing={4} alignItems="center">
      {/* Band Header: Logo, EPK, Download */}
      <Header/>

      <Grid item container style={{backgroundColor: 'White', justifyContent: 'center'}}  direction="row" height="2vh" className="GroupPage_Content_Row" xs={10} spacing={2}>
        <Grid item  >
        <iframe src="https://open.spotify.com/embed/album/6LY5KTIAguU6rI2lUbwJaN" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Grid>
        <Grid item >
        <iframe src="https://open.spotify.com/embed/album/1XlRl7o56eVi8qIkoqISop" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Grid>
      </Grid>
      
      {/* Showtimes */}
      <Schedule/>
      
      
      {/* Start of performer info boxes */}
      <Grid container
      direction="column" className="GroupPage_Content_Row">
        <MemberInfo index="3"/>
        <MemberInfo index="0"/>
        <MemberInfo index="1"/>
        <MemberInfo index="2"/>
      </Grid>
      </Grid>
    </div>
    
  );
}

function stringToHTML(str)
{
  // var parser = new DOMParser();
  // var doc = parser.parseFromString(str, 'text/html');
  // return doc.body;

  var dom = document.createElement('div');
  dom.innerHTML = str;
  return {dom};
}