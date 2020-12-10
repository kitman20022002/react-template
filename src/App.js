import React from "react";
import './App.css';
import Route, {Switch, Router} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
}

export default App;
