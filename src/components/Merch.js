import React from 'react';
import GC from './GroupContainers/GroupContainer';
import image from '../img/RenardMerch.png'

export default class BohemianQuartet extends React.Component {
    render() {
        return (
                <GC 
                logo={image}
                photo={image}
                url="https://bandcamp.com/"
                urltarget="_blank"
                name="Merch Shop"/>

            
        )
    }
}