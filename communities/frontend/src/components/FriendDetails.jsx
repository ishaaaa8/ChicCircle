import React from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetail.css';

const friendsData = [
    { id: 1, name: 'Alice', profilePicture: 'https://via.placeholder.com/50', ootdPicture: 'alice_ootd.jpg', recommendations: ['dress1.jpg', 'dress2.jpg'] },
    { id: 2, name: 'Bob', profilePicture: 'https://via.placeholder.com/50', ootdPicture: 'bob_ootd.jpg', recommendations: ['shirt1.jpg', 'pants1.jpg'] },
    // Add more friends as needed
];

const FriendDetail = () => {
    const { id } = useParams();
    const friend = friendsData.find(friend => friend.id === parseInt(id));

    if (!friend) {
        return <p>Friend not found</p>;
    }

    return (
        <div className="friend-detail">
            <div className="ootd-card">
                <div className="ootd-picture">
                    <img src={friend.ootdPicture} alt={`${friend.name}'s OOTD`} />
                </div>
                <div className="recommended-clothes">
                    <h3>Recommended Clothes</h3>
                    {friend.recommendations.map((rec, index) => (
                        <img key={index} src={rec} alt="Recommended" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FriendDetail;
