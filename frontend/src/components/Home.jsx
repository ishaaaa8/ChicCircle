import React from 'react';

const Home = ({ category, images, selectImage }) => {
  return (
    <div className="home">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="card-container">
        {images.map((image, index) => (
          <div key={index} className="card" onClick={() => selectImage(image)}>
            <img src={image} alt={`${category} ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
