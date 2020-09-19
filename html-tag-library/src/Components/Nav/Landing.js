import React from 'react';

const Landing = () => {

    function Content() {
        var date = new Date();
        var hours = date.getHours();

        function Morning() {
            return <div className='morning'>
                <h1>Good morning and welcome to the Library.</h1>
            </div>;
        }

        function Noon() {
            return <div className='noon'>
                <h1>Good afternoon and welcome to the Library!</h1>
            </div>;
        }

        function Evening() {
            return <div className='evening'>
                <h1>Good evening and welcome to the Library!</h1>
            </div>;
        }

        if (hours < 12) {
            return <Morning />;
        }
        else if (hours >= 12 && hours <= 17) {
            return <Noon />
        }
        else if (hours >= 17 && hours <= 24) {
            return <Evening />
        }
    }

    return (
        <div className='landing'>
            <Content />
        </div>
    );
}

export default Landing;