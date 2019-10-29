import React from 'react';
import {
    BrowserRouter as Router,
    Route,
}   from 'react-router-dom';
import NavBar from './components/NavBar'
import Latest from './components/Latest'
import Search from './components/Search'
import './App.css'



const App = () => {
    return (
        <Router>
            <div className='App'>
                <NavBar />
                <Route path = '/' exact component = {Latest} />
                <Route path = '/search' component = {Search} />
            </div>
        </Router>
    );
}

export default App;
