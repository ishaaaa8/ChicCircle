import React, { useState } from 'react';
import Left from './components/Left';
import Home from './components/Home';
import Right from './components/Right';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('tops');
  const [selectedImage, setSelectedImage] = useState(null);
  const [height, setHeight] = useState(174);
  const [size, setSize] = useState('S');

  const images = {
    tops: [
     '/assests/Tops-Black.jpg',
      '/assests/Tops-blue.jpg',
      '/assests/Tops-Blue-174-S.png'
    ],
    jeans: [
      '/assets/jeans/jeans1.png',
      '/assets/jeans/jeans2.png',
      '/assets/jeans/jeans3.png'
    ]
  };

  const positions = {
    tops: {
      top1: { top: '10%', left: '15%' },
      top2: { top: '12%', left: '17%' },
      top3: { top: '14%', left: '19%' }
    },
    jeans: {
      jeans1: { top: '60%', left: '15%' },
      jeans2: { top: '62%', left: '17%' },
      jeans3: { top: '64%', left: '19%' }
    }
  };

  const getClothingPosition = (image) => {
    const categoryPositions = positions[category];
    const imageName = image.split('/').pop().split('.')[0];
    console.log(image);
    console.log(imageName);
    return categoryPositions[imageName] || { top: '18%', left: '25%' };
  };


  return (
    <div className="app">
      <Left setCategory={setCategory} />
      <Home category={category} images={images[category]} selectImage={setSelectedImage} />

      <Right setHeight={setHeight} setSize={setSize} height={height} size={size} />

      <div className="model-display">
        <h2>Model Preview</h2>

        <div className="model-container">
          <img src={`/assests/${height}-${size}.png`} alt="Model" className="model-image" />
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="clothing-image"
              style={getClothingPosition(selectedImage)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
