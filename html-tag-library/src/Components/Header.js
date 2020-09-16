import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className='header'>
            <div className='wrap'>
                <h1>Complete Html Tag Library</h1>
                <div className='search'>
                    <input type='text' placeholder='search'></input>
                    <a href='#' className='magnifying-glass'><span>&#128269;</span></a>
                </div>
                <NavBar />
            </div>
        </div>
    );
}

export default Header;