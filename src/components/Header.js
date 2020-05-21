import React from 'react';
import { Link } from "react-router-dom";
import RMGLogo from '../img/RMG_Logo_Horizontal_White.png'

export default function Header () {
    return (
        <header className="App-header">
            <Link exact to="/">
                <img src={RMGLogo} className="Header-logo" alt="BohemianQuartet Logo" />
            </Link>
        </header>
    );
}
