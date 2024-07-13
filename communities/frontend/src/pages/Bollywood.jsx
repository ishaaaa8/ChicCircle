import React from 'react';
import './Bollywood.css';
import img1 from "../assets/bollywood-chic.png";
import img2 from "../assets/bollywood-trad.png";
import img3 from "../assets/bollywood-glam.png";
const TrendCard = ({ trend }) => {
    return (
        <div className="trend-card">
            <img src={trend.image} alt={trend.title} className="trend-image" />
            <h3>{trend.title}</h3>
            <p>{trend.description}</p>
            <div className="hashtags">
                {trend.hashtags.map((tag, index) => (
                    <button key={index} className="hashtag-button" onClick={() => alert(`Clicked on hashtag: ${tag}`)}>
                        {tag}
                    </button>
                ))}
            </div>
            <button onClick={trend.saveOutfit} className='submit-button'>View More</button>
            <button onClick={trend.saveOutfit} className='submit-button'>Add to Favorite</button>
        </div>
    );
};

const Bollywood = () => {
    const trends = [
        {
            title: 'Casual Chic',
            description: 'Inspired by the latest Bollywood casual wear.',
            image: img1,
            hashtags: ['#Casual', '#Chic', '#BollywoodFashion'],
            saveOutfit: () => alert('Outfit saved: Casual Chic!'),
        },
        {
            title: 'Traditional Elegance',
            description: 'Look elegant with this traditional outfit.',
            image: img2,
            hashtags: ['#Traditional', '#Elegant', '#Fashion'],
            saveOutfit: () => alert('Outfit saved: Traditional Elegance!'),
        },
        {
            title: 'Glam Night',
            description: 'Stand out at the party with this glamorous outfit.',
            image: img3,
            hashtags: ['#Glam', '#PartyWear', '#Trendy'],
            saveOutfit: () => alert('Outfit saved: Glam Night!'),
        },
        // {
        //     title: 'Sporty Vibes',
        //     description: 'Stay comfortable and trendy with this sporty look.',
        //     image: 'url_to_image4.jpg',
        //     hashtags: ['#Sporty', '#Comfort', '#CasualFashion'],
        //     saveOutfit: () => alert('Outfit saved: Sporty Vibes!'),
        // },
    ];

    return (
        <div className="bollywood">
            <h1>Bollywood Community</h1>
            <p>Welcome to the Bollywood community page!</p>
            <div className="trends-container">
                {trends.map((trend, index) => (
                    <TrendCard key={index} trend={trend} />
                ))}
            </div>
        </div>
    );
};

export default Bollywood;
