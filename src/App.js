import logo from './logo.svg';
import React from "react";
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    );
}

export default App;
