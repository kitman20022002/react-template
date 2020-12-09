import React from 'react';
import './HomePage.css'
import Header from "../../component/Header/Header";

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Home</h1>
                <Header/>
            </React.Fragment>
        );
    }
}

export default HomePage;