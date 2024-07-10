import React from 'react';

const Home = ({ category, images, selectImage }) => {
  return (
    <div className="home">
      <div className="card-container">
        {images.map((image, index) => (
          <div className="card" key={index} onClick={() => selectImage(image)}>
            <img src={image} alt={`Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
