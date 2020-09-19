import React from 'react';
import logo from './Images/logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <h4>&#9400; Code_<span className='red'>Fu</span> <img src={logo} alt='logo' /> 2020</h4>
            </div>
        </div>
    );
}

export default Footer;