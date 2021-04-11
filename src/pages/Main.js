import React from 'react';
import Header from "../components/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Popular from "./Popular";
import TopRated from "./TopRated";
import NowPlaying from "./NowPlaying";
import FilmDetails from "../components/FilmDetails";

const Main = () => {


    return (
            <Router className="background" >
                <Header/>
                <Switch>
                    <Route exact path="/" component={TopRated}/>
                    <Route path="/popular" component={Popular}/>
                    <Route path="/nowplaying" component={NowPlaying}/>
                    <Route path="/film/:id" component={FilmDetails}/>
                </Switch>
            </Router>
    );
};

export default Main;