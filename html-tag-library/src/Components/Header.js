import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h1>Complete Html Tag Library</h1>
            <div className='search'>
                <input type='text' placeholder='search'></input>
                <a href='#' className='magnifying-glass'><span>&#128269;</span></a>
            </div>
        </div>
    );
}

export default Header;