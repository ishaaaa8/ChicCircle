import React, { useState } from 'react';
import './Friend.css';

const friendsData = [
    { id: 1, name: 'Alice', profilePicture: 'alice.jpg', ootdPicture: 'alice_ootd.jpg', recommendations: ['dress1.jpg', 'dress2.jpg'] },
    { id: 2, name: 'Bob', profilePicture: 'bob.jpg', ootdPicture: 'bob_ootd.jpg', recommendations: ['shirt1.jpg', 'pants1.jpg'] },
    // Add more friends as needed
];

const Friends = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleFriendClick = (friend) => {
        setSelectedFriend(friend);
    };

    return (
        <div className="friends-section">
            <div className="friends-list">
                {friendsData.map((friend) => (
                    <img
                        key={friend.id}
                        src={friend.profilePicture}
                        alt={friend.name}
                        className="friend-profile-picture"
                        onClick={() => handleFriendClick(friend)}
                    />
                ))}
            </div>
            <div className="friend-ootd-section">
                {selectedFriend ? (
                    <div className="friend-ootd">
                        <div className="ootd-card">
                            <div className="ootd-picture">
                                <img src={selectedFriend.ootdPicture} alt={`${selectedFriend.name}'s OOTD`} />
                            </div>
                            <div className="recommended-clothes">
                                <h3>Recommended Clothes</h3>
                                {selectedFriend.recommendations.map((rec, index) => (
                                    <img key={index} src={rec} alt="Recommended" />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Select a friend to view their OOTD and recommendations.</p>
                )}
            </div>
        </div>
    );
};

export default Friends;
