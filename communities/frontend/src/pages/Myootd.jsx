import React, { useEffect, useState } from 'react';
import './FrPage.css';
import img1 from "../assets/tanya-profile.png";
// import img2 from "../assets/vany-profile.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
const Myootd = ({ friendUsername }) => {
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recommendedClothes, setRecommendedClothes] = useState([]);
    const hashtags = ["#casual"];

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
            } finally {
                setLoading(false);
            }
        };

       

        const fetchRecommendedClothes = async () => {
            try {
                const response = await fetch(`/api/recommendations/${friendUsername}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recommended clothes');
                }
                const data = await response.json();
                setRecommendedClothes(data);
            } catch (err) {
                setError(err.message);
            }
        };

        // fetchFriendData();
        // fetchRecommendedClothes();
    }, [friendUsername]);

    const recommend = [
        { link: "https://www.myntra.com/tshirts/here26now/herenow-women-printed-pure-cotton-boxy-crop-t-shirt/24429724/buy", image: img11 },
        { link: "https://www.myntra.com/tshirts/kryptic/kryptic-women-printed-pure-cotton-drop-shoulder-oversized-crop-tshirt/24703406/buy", image: img12 },
        { link: "https://www.myntra.com/jeans/trendyol/trendyol-women-regular-fit-mid-rise-slash-knee-cotton-jeans/26226064/buy", image: img13 },
        { link: "https://www.myntra.com/handbags/mango/mango-black--white-zebra-print-leather-sling-bag/8321753/buy", image: img14 }
    ];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="friends-page">
            <div className="ootd-card">
                <div className='ootd-heading'>My OOTD</div>
                <img src={img1} alt={`My OOTD`} className="ootd-image" />
                <div className="ootd-description">
                    <p>Cool</p>
                    <div className="ootd-hashtags">
                        {hashtags.map((tag,index) => (
                            // <span key={index} className="hashtag">{tag}</span>
                            <button className='hashtag'>{tag}</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="recommended-clothes">
                <div className='buy-look'>Buy Similar</div>
                <div className='buy-look-cards'>
                {recommend.map((clothes, index) => (
                    <a href={clothes.link} key={index} target="_blank" rel="noopener noreferrer">
                        <img src={clothes.image} alt="img" className="recommended-clothes-image" />
                    </a>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Myootd;
