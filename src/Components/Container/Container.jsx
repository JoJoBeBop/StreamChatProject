import React from 'react';
import './Container.scss';
import {Route, HashRouter} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage';
import StreamPlayer from '../StreamPlayer/StreamPlayer';

const Container = () => {
    return (
        <HashRouter basename="/build2">

            <div className="Container">
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/Single" component={StreamPlayer}/>
        </div>
        </HashRouter>
    );
}

export default Container;