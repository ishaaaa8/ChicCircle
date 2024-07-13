import React, { useState } from 'react';
import './OOTD.css';
import { useNavigate } from 'react-router-dom';

const OOTD = () => {
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const predefinedTags = ['Casual', 'Formal', 'Party', 'Summer', 'Winter', 'Pink', 'Barbie', 'Marvel'];

    const handleTagClick = (tag) => {
        if (!tags.includes(tag)) {
            setTags([...tags, tag]);
        }
    };

    const handleSubmit = () => {
        navigate('/myootd');
    };

    const handleAddNewTag = () => {
        if (newTag && !tags.includes(newTag)) {
            setTags([...tags, newTag]);
            setNewTag('');
        }
    };

    const handleFileChange = (e) => {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="ootd">
            <h1>Share Your OOTD</h1>
            <div className="upload-section">
                <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                <button onClick={() => document.getElementById('file-upload').click()}>Upload from Gallery</button>
                <button>Open Camera</button>
            </div>
            {selectedImage && (
                <div className="image-preview">
                    <img src={selectedImage} alt="Selected" />
                </div>
            )}
            <textarea
                placeholder="Add a description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="tags-section">
                <h3>Choose Tags</h3>
                <div className="predefined-tags">
                    {predefinedTags.map((tag, index) => (
                        <button key={index} onClick={() => handleTagClick(tag)}>
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="new-tag">
                    <input
                        type="text"
                        placeholder="Add a new tag..."
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                    />
                    <button onClick={handleAddNewTag}>Add Tag</button>
                </div>
                <div className="selected-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <button className="submit-btn" onClick={handleSubmit}>Share</button>
        </div>
    );
};

export default OOTD;
