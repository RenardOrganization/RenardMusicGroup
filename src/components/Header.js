import React from 'react';
import { Link } from "react-router-dom";
import RMGLogo from '../img/RMG_Logo_White_NoText.png'

export default function Header () {
    return (
        <header className="App-header">
            <span>
                <Link exact to="/">
                    <img src={RMGLogo} className="Header-logo" alt="BohemianQuartet Logo" />
                    Renard Music Group
                </Link>
            </span>
        </header>
    );
}
