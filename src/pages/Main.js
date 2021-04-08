import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import TopFilms from "../components/TopFilms";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Popular from "./Popular";
import TopRated from "./TopRated";
import NowPlaying from "./NowPlaying";

const Main = () => {

    return (
            <Router>
                <Header/>
                <TopFilms />
                <Switch>
                    <Route exact path="/" component={TopRated}/>
                    <Route exact path="/popular" component={Popular}/>
                    <Route exact path="/nowplaying" component={NowPlaying}/>
                </Switch>
            </Router>
    );
};

export default Main;