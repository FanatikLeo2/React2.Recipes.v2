import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main.js"
import Footer from "./Footer.js";
import Header from "./Header.js";

import "../styles/App.css" 

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
            </Router>
        );
    }
}

export default App;