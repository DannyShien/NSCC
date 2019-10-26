import React from 'react';
import {
    BrowserRouter as Router,
    Route,
}   from 'react-router-dom';
import NavBar from './components/NavBar'
// import Latest from './components/Lastest'
// import Search from './components/Search'

function App() {
    return (
        <Router>
            <NavBar />
            {/* <Route path = '/' exact component = {Latest} /> */}
            {/* <Route parth = '/serach' component = {Search} /> */}
            <h1>XKCD!</h1>
        </Router>
    );
}

export default App;
