import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
// import Post from '../../../backend/models/Post';
import img1 from "../assets/isha-profile.png"

const Profile = () => {
    return (
        <div className="profile">
            <h1>Your Profile</h1>
            <div className="profile-pic-section">
                <img src={img1} alt="Profile" className="profile-pic" />

                <Link to="/post">
                    <button>View Your Posts</button>
                    <button>Upload Your OOTD</button>
                    {/* ye jb click hoga, fetch post (url,description,tags) corresponding to user name  */}
                    {/* <Post send image url,description and tags from username  /> */}
                </Link>
            </div>
        </div>
    );
};

export default Profile;
