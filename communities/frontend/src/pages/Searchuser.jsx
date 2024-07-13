import React, { useState } from 'react';
import './FrPage.css';
import img1 from "../assets/tanya-ootd.png";
import img11 from "../assets/img41.png";
import img12 from "../assets/img13.png";
import img13 from "../assets/img43.png";
import img14 from "../assets/img44.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchuser = ({ friendUsername }) => {
    const [selectedHashtag, setSelectedHashtag] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showRecommendations, setShowRecommendations] = useState(false);
    const hashtags = ["#formal", "#straight-fit", "#white", "#office"];

    const handleAddFriend = () => {
        toast.success("Added successfully!");
    };

    const handleHashtagClick = (hashtag) => {
        setSelectedHashtag(hashtag);
    };

    const closeHashtagDetails = () => {
        setSelectedHashtag(null);
    };

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
        }, 1500);
    };

    return (
        <div className="friends-page">
            <div className="ootd-card">
                <div className='ootd-heading'>
                    <div>Tanya's OOTD</div>
                    <div className='add-friend' onClick={handleAddFriend}>+ Add Friend</div>
                </div>
                <img src={img1} alt={`Tanya's OOTD`} className="ootd-image" />
                <div className="ootd-description">
                    <p>Feeling Formal</p>
                    <div className="ootd-hashtags">
                        {hashtags.map((tag, index) => (
                            <button key={index} className='hashtag' onClick={() => handleHashtagClick(tag)}>
                                {tag}
                            </button>
                        ))}
                    </div>
                    <button className="recommend-button" onClick={handleRecommendClick}>Recommend</button>
                </div>
            </div>

            {selectedHashtag && (
                <div className="hashtag-details" onClick={closeHashtagDetails}>
                    <div className="hashtag-content">
                        <span>Hashtag: {selectedHashtag}</span>
                        <span>Used By: 4.2K</span> 
                        <span>Similar: #office #work #bosslady</span> 
                    </div>
                </div>
            )}

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
            
            <ToastContainer />
        </div>
    );
};

export default Searchuser;
