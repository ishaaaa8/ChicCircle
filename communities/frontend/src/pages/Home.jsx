import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import img1 from "../assets/bollywood-img-bg.png";

import img2 from "../assets/kd-img-bg.png";
const Home = () => {
    const communities = [
        { name: 'Bollywood', image: img1, path: '/bollywood' },
        { name: 'K-Drama', image: img2, path: '/kdrama' },
    ];

    return (
        <div className="home">
            <h1>Communities</h1>
            <div className="community-cards">
                {communities.map((community, index) => (
                    <Link to={community.path} key={index} className="community-card">
                        <img src={community.image} alt={community.name} />
                        <h3>{community.name}</h3>
                        <button>View Now</button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
