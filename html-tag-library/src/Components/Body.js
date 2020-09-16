import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AudioVideo from './Nav/AudioVideo';
import Basic from './Nav/Basic';
import Formatting from './Nav/Formatting';
import FormsAndInputs from './Nav/FormsAndInputs';
import Frames from './Nav/Frames';
import FullList from './Nav/FullList';
import Images from './Nav/Images';
import Landing from './Nav/Landing';
import Links from './Nav/Links';
import Lists from './Nav/Lists';
import Meta from './Nav/Meta';
import Programming from './Nav/Programming';
import StylesAndSemantics from './Nav/StylesAndSemantics';
import Tables from './Nav/Tables';

const Body = () => {
    return (
        <div className='body'>
            <Router className='main'>
                <Route exact path='/'>
                    <Landing />
                </Route>
                <Route exact path='/fullList'>
                    <FullList />
                </Route>
                <Route exact path='/basic'>
                    <Basic />
                </Route>
                <Route exact path='/formatting'>
                    <Formatting />
                </Route>
                <Route exact path='/formsAndInputs'>
                    <FormsAndInputs />
                </Route>
                <Route exact path='/frames'>
                    <Frames />
                </Route>
                <Route exact path='/images'>
                    <Images />
                </Route>
                <Route exact path='/audioVideo'>
                    <AudioVideo />
                </Route>
                <Route exact path='/links'>
                    <Links />
                </Route>
                <Route exact path='/lists'>
                    <Lists />
                </Route>
                <Route exact path='/tables'>
                    <Tables />
                </Route>
                <Route exact path='/stylesAndSemantics'>
                    <StylesAndSemantics />
                </Route>
                <Route exact path='/meta'>
                    <Meta />
                </Route>
                <Route exact path='/programming'>
                    <Programming />
                </Route>
            </Router>
        </div>
    );
}

export default Body;