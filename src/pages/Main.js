import React from 'react';
import Header from "../components/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Popular from "./Popular";
import TopRated from "./TopRated";
import NowPlaying from "./NowPlaying";
import FilmDetails from "../components/FilmDetails";
import Footer from "../components/Footer";
import SearchPage from "./SearchPage";

const Main = () => {


    return (
            <Router className="background" >
                <Header/>
                <Switch>
                    <Route exact path="/" component={TopRated}/>
                    <Route path="/popular" component={Popular}/>
                    <Route path="/nowplaying" component={NowPlaying}/>
                    <Route path="/film/:id" component={FilmDetails}/>
                    <Route path="/search/:param" component={SearchPage}/>
                </Switch>
                <Footer/>
            </Router>
    );
};

export default Main;