import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './groupPages.css';
import Header from './Content/Viatorum/Header'
import Schedule from './Content/Viatorum/Showtimes'
import viaMap from '../../img/Viatorum/Viatorum_Map.jpg'
import MemberInfo from './Content/Viatorum/memberinfo.js'


export default function App() {
  return (
    <div>
      <Grid container
        direction="column" spacing={4} alignItems="center">

        {/* Band Header: Logo, EPK, Download */}
        <Header/>

        <Grid item container direction="row" justify="center" alignItems="center">
          <Grid item xs={0}>
            <img src={viaMap} className="Banner" alt="Viatorum Definition"/>
          </Grid>
        </Grid>

        
        {/* Showtimes */}
        <Schedule/>
        
        {/* Start of performer info boxes */}
        <Grid container
          direction="column" className="GroupPage_Content_Row">

        {/* Individual Performer */}
        <MemberInfo index="0"/>
        <MemberInfo index="1"/>
        <MemberInfo index="2"/>
        <MemberInfo index="3"/>
        <MemberInfo index="4"/>
      </Grid> {/* End of performer info boxes */}
      </Grid>
    </div>
    
  );
}

//Parse HTML for MemberInfo to allow styling and linking within the 'info' itself, instead of just plain text
function stringToHTML(str) 
{
  // var parser = new DOMParser();
  // var doc = parser.parseFromString(str, 'text/html');
  // return doc.body;

  var dom = document.createElement('div');
  dom.innerHTML = str;
  return {dom};
}