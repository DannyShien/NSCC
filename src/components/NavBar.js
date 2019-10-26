import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = 'navbar'>
            <Link to = '/' className = 'latest link'>Latest</Link>
            <Link to = 'search' className = 'search link'>Search</Link>
        </div>
    )
}

export default NavBar;