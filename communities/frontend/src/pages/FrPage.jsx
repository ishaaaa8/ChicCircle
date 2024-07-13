import React, { useState } from 'react';
import './FrPage.css';
import img1 from "../assets/gany-profile.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";

const FrPage = ({ friendUsername }) => {
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [loading, setLoading] = useState(false);
    const hashtags = ["#casual", "#straight-fit", "#brown", "#T-Shirt"];

    const recommend = [
        { link: "https://www.myntra.com/tshirts/here26now/herenow-women-printed-pure-cotton-boxy-crop-t-shirt/24429724/buy", image: img11 },
        { link: "https://www.myntra.com/tshirts/kryptic/kryptic-women-printed-pure-cotton-drop-shoulder-oversized-crop-tshirt/24703406/buy", image: img12 },
        { link: "https://www.myntra.com/jeans/trendyol/trendyol-women-regular-fit-mid-rise-slash-knee-cotton-jeans/26226064/buy", image: img13 },
        { link: "https://www.myntra.com/handbags/mango/mango-black--white-zebra-print-leather-sling-bag/8321753/buy", image: img14 }
    ];

    const handleRecommendClick = () => {
        setLoading(true);
        setShowRecommendations(false);
        setTimeout(() => {
            setLoading(false);
            setShowRecommendations(true);
        }, 3000);
    };

    return (
        <div className="friends-page">
            <div className="ootd-card">
                <div className='ootd-heading'>Gany's OOTD</div>
                <img src={img1} alt={`Gany's OOTD`} className="ootd-image" />
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

            {loading && <p>Loading recommendations...</p>}

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

export default FrPage;
