import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import TopFilms from "../components/TopFilms";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Popular from "./Popular";

const Main = () => {

    return (
            <Router>
                <Header/>
                <TopFilms />
                <Switch>
                    <Route exact path="/" component={Popular}/>
                </Switch>
            </Router>
    );
};

export default Main;