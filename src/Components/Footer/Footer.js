import React from 'react';
import './Footer.scss';

function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-details">
                <p>Made by Helen Murphy</p>
                <p>API by The Movie DB</p>
            </div>
                
            <img src="./TMBLogo.svg" alt="Logo" />
        </div>
    )
}

export default Footer;