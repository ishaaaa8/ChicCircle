import React, { useEffect, useState } from 'react';
import './FriendsPage.css';
import img1 from "../assets/vany-profile.png";
import img11 from "../assets/img21.png";
import img12 from "../assets/img22.png";
import img13 from "../assets/img23.png";
import img14 from "../assets/img24.png";

const FriendsPage2 = ({ friendUsername }) => {
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [error, setError] = useState(null);
    const hashtags = ["#printed", "#green", "#summers", "#tendy-color"];

    useEffect(() => {
        const fetchFriendData = async () => {
            try {
                const response = await fetch(`/api/users/${friendUsername}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch friend data');
                }
                const data = await response.json();
                setFriend(data);
            } catch (err) {
                setError(err.message);
            }
        };

        // fetchFriendData();
    }, [friendUsername]);

    const recommend = [
        { link: "https://www.myntra.com/dresses/aahwan/aahwan-green-floral-mini-dress/19500712/buy", image: img11 },
        { link: "https://www.myntra.com/ethnic-dresses/taavi/taavi-green-bagru-hand-block-print-a-line-sustainable-pure-cotton-dress-with-pleats--pockets/8862011/buy", image: img12 },
        { link: "https://www.myntra.com/dresses/pluss/pluss-women-gorgeous-green-floral-ruffled--flounced-dress/15598372/buy", image: img13 },
        { link: "https://www.myntra.com/jumpsuit/aaheli/aaheli-green-printed-jumpsuit/20967106/buy", image: img14 }
    ];

    const handleRecommendClick = () => {
        setLoading(true);
        setShowRecommendations(false);
        setTimeout(() => {
            setLoading(false);
            setShowRecommendations(true);
        }, 1000);
    };

    if (loading) return <p>Loading recommendations...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="friends-page">
            <div className="ootd-card">
                <div className='ootd-heading'>Gany's OOTD</div>
                <img src={img1} alt={`Vany's OOTD`} className="ootd-image" />
                <div className="ootd-description">
                    <p>This is my go-to look.</p>
                    <div className="ootd-hashtags">
                        {hashtags.map((tag, index) => (
                            <button key={index} className='hashtag'>{tag}</button>
                        ))}
                    </div>
                    <button className="recommend-button" onClick={handleRecommendClick}>Recommend</button>
                </div>
            </div>

            {showRecommendations && (
                <div className="recommended-clothes">
                    <div className='buy-look'>Buy Look</div>
                    <div className='buy-look-cards'>
                        {recommend.map((clothes, index) => (
                            <a href={clothes.link} key={index} target="_blank" rel="noopener noreferrer">
                                <img src={clothes.image} alt="img" className="recommended-clothes-image" />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FriendsPage2;
