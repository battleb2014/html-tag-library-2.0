import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
            <Switch className='main'>
                <Route exact path='/' component={Landing} />
                <Route path='/fullList' component={FullList} />
                <Route path='/basic' component={Basic} />
                <Route path='/formatting' component={Formatting} />
                <Route path='/formsAndInputs' component={FormsAndInputs} />
                <Route path='/frames' component={Frames} />
                <Route path='/images' component={Images} />
                <Route path='/audioVideo' component={AudioVideo} />
                <Route path='/links' component={Links} />
                <Route path='/lists' component={Lists} />
                <Route path='/tables' component={Tables} />
                <Route path='/stylesAndSemantics' component={StylesAndSemantics} />
                <Route path='/meta' component={Meta} />
                <Route path='/programming' component={Programming} />
                <Route exact path="/" render={() => <div><h1 className='error'>404</h1></div>} />
            </Switch>
        </div>
    );
}

export default Body;