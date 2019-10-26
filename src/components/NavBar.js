import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = 'latest'>
            <Link to = '/' className = 'link'>Lastest</Link>
            <Link to = 'search' className = 'link'>Search</Link>
        </div>
    )
}

export default NavBar;