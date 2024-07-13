import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = () => {
    return (
        <div className="post">
            <h1>Your Posts</h1>
            <Link to="/ootd">
                <button>Share OOTD</button>
            </Link>
            {/* Display user's posts here */}
        </div>
    );
};

export default Post;
