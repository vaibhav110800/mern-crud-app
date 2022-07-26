import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <button><Link style={{ color: 'black', textDecoration:'none' }} to="/">Home</Link></button>
            <button><Link style={{ color: 'black', textDecoration:'none' }} to="/add">Add User</Link></button>
        </div>
    );
}

export default Header;