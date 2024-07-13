import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './OOTD.css';

const OOTDPage = () => {
    const { username } = useParams();
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        const fetchFriendData = async () => {
            const response = await fetch(`/api/users/${username}`);
            const data = await response.json();
            setFriend(data);
        };
        fetchFriendData();
    }, [username]);

    if (!friend) return <p>Loading...</p>;

    return (
        <div className="ootd-page">
            <h2>{friend.username}'s OOTD</h2>
            <img src={friend.ootd} alt={`${friend.username}'s OOTD`} />
            {/* Display friend’s posts or recommendations here */}
        </div>
    );
};

export default OOTDPage;
