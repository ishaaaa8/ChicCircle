import React from 'react';
import { useParams } from 'react-router-dom';
import './HashtagDetails.css';

const HashtagDetails = () => {
    const { hashtag } = useParams();

    const dummyData = {
        "#formal": {
            usageCount: 120,
            userCount: 35,
            relatedHashtags: ["#office", "#work", "#bossladylook"]
        },
        "#straight-fit": {
            usageCount: 85,
            userCount: 20,
            relatedHashtags: ["#slim-fit", "#casual", "#jeans"]
        },
        "#white": {
            usageCount: 150,
            userCount: 40,
            relatedHashtags: ["#summer", "#classic", "#minimal"]
        },
        "#office": {
            usageCount: 90,
            userCount: 25,
            relatedHashtags: ["#workwear", "#formal", "#bossladylook"]
        }
    };

    const hashtagData = dummyData[hashtag] || {
        usageCount: 0,
        userCount: 0,
        relatedHashtags: []
    };

    return (
        <div className="hashtag-details">
            <h2>{hashtag} Details</h2>
            <p>Usage Count: {hashtagData.usageCount}</p>
            <p>Used by: {hashtagData.userCount} users</p>
            <div className="related-hashtags">
                <h3>Related Hashtags</h3>
                {hashtagData.relatedHashtags.map((relatedHashtag, index) => (
                    <span key={index} className="related-hashtag">
                        {relatedHashtag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default HashtagDetails;
