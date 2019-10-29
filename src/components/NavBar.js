import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className = 'navbar'>
            <Link to = '/' className='latest'>Latest</Link>
            <Link to = 'search' className='search'>Search</Link>
        </div>
    )
}

export default NavBar;