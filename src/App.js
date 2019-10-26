import React from 'react';
import {
    BrowserRouter as Router,
    Route,
}   from 'react-router-dom';
import NavBar from './components/NavBar'

function App() {
    return (
        <Router>
            <NavBar />
            {/* <Route path = '/' exact component = {Latest} /> */}
            <h1>XKCD!</h1>
        </Router>
    );
}

export default App;
