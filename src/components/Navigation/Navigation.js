import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const navStyle = {
        color : '#333',
        fontSize: '22px',
        fontWeight: '700',
        padding: '20px',
        display: 'inline-block',
    }
    return (
        <div>
            <NavLink style={navStyle} to="/home">Home</NavLink>
            <NavLink style={navStyle} to="/about">About</NavLink>
            <NavLink style={navStyle} to="/friends">Friends</NavLink>
        </div>
    );
};

export default Navigation;