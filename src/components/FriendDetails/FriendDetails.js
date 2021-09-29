import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './FriendDetails.css'

const FriendDetails = () => {
    const {frienId} = useParams()
    const [ friend,setFriend ] = useState({})

    const history = useHistory();

    const handler = () => {
        history.push('/friends')
    }

     useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/users/${frienId}`;
        fetch(url)
        .then(res => res.json()) 
        .then( data => setFriend(data));
    },[])
    return (
        <div>
            <h2>Friend Details For {friend.name}</h2>
            <h2>UserName : {friend.username}  </h2>
            <h2>Email : {friend.email}  </h2>
            <h2>City : {friend.address?.city}  </h2>

            <button onClick={handler} className="button-click"> Previous All Data </button>

        </div>
    );
};

export default FriendDetails;