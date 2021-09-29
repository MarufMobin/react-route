import React from 'react';
import {  Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { name, phone, id, website, email,address} = props.friend;
    return (
        <div className="cart-component">
            <h2>Name: {name}</h2>
            <h3>email: {email}</h3>
            <h5>Phone: {phone}</h5>
            <h5>Live In : {address.city}</h5>
            <h5>Visite Me : {website}</h5>
            <Link to={`/friend/${id}`} className="button">View Details</Link>
        </div>
    );
};

export default Friend;