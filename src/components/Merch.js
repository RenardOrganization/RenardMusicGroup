import React from 'react';
import GC from './GroupContainers/GroupContainer';
import image from '../img/RenardMerch.png'

export default class BohemianQuartet extends React.Component {
    render() {
        return (
                <GC 
                logo={image}
                photo={image}
                url="merchandise"
                urltarget="_blank"
                name="Merch Shop"/>

            
        )
    }
}