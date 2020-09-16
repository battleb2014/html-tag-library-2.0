import React from 'react';
import noon from './Images/noon.svg';

const Landing = () => {

    var date = new Date();
    var hours = date.getHours();


    var greet;
    var url;

    if (hours < 12) {
        greet = 'Good Morning';
        url = "'./Images/morning.svg'";
    } else if (hours >= 12 && hours <= 17) {
        greet = 'Good Afternoon';
        url = `${noon}`;
    } else if (hours >= 17 && hours <= 24) {
        greet = 'Good Evening';
        url = './Images/night.svg';
    };

    return (
        <div className='landing' styles={{
            backgroundImage: "url(./Images/night.svg)"
        }}>
            <h1 className='greeting'>{greet}</h1>
        </div >
    );
}

export default Landing;