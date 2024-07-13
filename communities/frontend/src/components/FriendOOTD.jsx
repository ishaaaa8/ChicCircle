import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendOOTD = ({ userId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`/api/posts/user/${userId}`);
                setPosts(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPosts();
    }, [userId]);

    return (
        <div className="friend-ootd">
            {posts.map(post => (
                <div className="ootd-card" key={post._id}>
                    <div className="ootd-picture">
                        <img src={post.imageUrl} alt="OOTD" />
                    </div>
                    <div className="recommended-clothes">
                        <h3>Recommended Clothes</h3>
                        <ul>
                            {post.recommendedClothes.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendOOTD;
