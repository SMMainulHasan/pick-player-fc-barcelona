import React from 'react';
import logo from '../../Images/FCB.png';
import './Header.css'

const Header = () => {
    return (
        <div className= "header">
            <div className= "logo">
                <img src={logo} alt="Side Logo"/>
                <h1>FC-Barcelona</h1>
            </div>

        </div>
    );
};

export default Header;