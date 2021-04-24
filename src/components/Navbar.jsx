import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="hd">
            <Link to="/">Top</Link>
            <Link to="/Events" className="current">Events</Link>
            <Link to="/Community">Community</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar
