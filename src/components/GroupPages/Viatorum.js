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
        <Grid xs={10}>
        <h2>Prone to wander…</h2>
        <p>
          A world in commotion; traversing migratory paths that cross the globe; narrowing the gulfs that divide; intuiting the common rhythms that pulse sympathetically with our shared humanity. These are the reverberant muses at the heart of Viatorum. Formed in the rich cultural mosaic of San Antonio, Texas, the members of Viatorum share a passion for music that grooves, uplifts, moves the spirit, and unites. With a deep reverence for the world’s diverse cultures, the band’s members hail from the United States, France, and Turkey.
        </p>
        <p>
          Imagine a jam session swirling in Middle Eastern modes, Western counterpoint, Romani fervor, driving rhythms, and Andalusian flair—and you will begin to understand the musical ambition of Viatorum. Based on their collective study of and training in a variety of musical traditions, their music endeavors to spread the infectious joy that it continually brings to them.
        </p>
        </Grid>

        {/* Showtimes */}
        <Schedule/>
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