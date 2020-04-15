import React from 'react';
import bandLogo1 from "../img/BohemianQuartet/Logo.JPG"
import bandImg1 from "../img/BohemianQuartet/Group2.jpg";

export default class GroupContainer extends React.Component {
    render() {
        
        return (
            <div>
                <img src={bandLogo1} className="Group-logo" alt="BohemianQuartet Logo" />
                <img src={bandImg1} className="Group-image" alt ="BohemianQuartet" />
                <p>
                BohemianQuartet
                </p>
            </div>
        )
    }
}