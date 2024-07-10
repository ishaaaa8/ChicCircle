import React, { useState } from 'react';
import Left from './components/Left';
import Home from './components/Home';
import Right from './components/Right';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('tops');
  // const [selectedItems, setSelectedItems] = useState({ tops: null, jeans: null, dresses: null, skirts: null, jumpsuits: null });
  const [selectedItems, setSelectedItems] = useState({ tops: null, jeans: null, dresses: null, skirts: null, jumpsuits: null, pants: null, playsuits: null, sweaters: null });
  const [height, setHeight] = useState(164);
  const [size, setSize] = useState('XS');

  const images = {
    tops: [
      '/assests/Tops-blue.jpg',
      '/assests/Tops-Black.jpg',
      '/assests/tops/Tops-Green.jpg'
    ],
    jeans: [
      '/assests/Jeans-Blue.jpg',
      '/assests/Jeans-Black.jpg',
      '/assests/Jeans-White.jpg'
    ],
    dresses: [
      '/assests/dresses-white.jpg',
      '/assests/Dresses-floral.jpg',
      '/assests/Dress-Green.jpg'
    ],
    skirts: [
      '/assests/Skirts-creame.jpg',
      '/assests/Skirt-Blue.jpg',
      '/assests/Skirt-Green.jpg'
    ],
    jumpsuits: [
      '/assests/Jumpsuit-White.jpg',
      '/assests/Playsuit-Yellow.jpg',
      '/assests/Jumpsuit-Green.jpg'
    ],
    playsuits: [
      '/assests/Playsuit-White.jpg',
      '/assests/Playsuit-Yellow.jpg',
      '/assests/Playsuit-Green.jpg'
    ],
    sweaters: [
      '/assests/Sweater-Blue.jpg',
      '/assests/Sweater-Black.jpg',
      '/assests/Sweater-Green.jpg'
    ]
  };

  const positions = {
    tops: {
      'Tops-blue-1': { top: '22%', left: '23%' },
      'Tops-Red-1': { top: '12%', left: '17%' },
      'Tops-Green-1': { top: '14%', left: '19%' }
    },
    jeans: {
      'Jeans-Blue-1': { top: '60%', left: '15%' },
      'Jeans-Black-1': { top: '62%', left: '17%' },
      'Jeans-White-1': { top: '64%', left: '19%' }
    },
    dresses: {
      'Dress-Red-1': { top: '10%', left: '18%' },
      'Dress-Blue-1': { top: '11%', left: '19%' },
      'Dress-Green-1': { top: '12%', left: '20%' }
    },
    skirts: {
      'Skirt-Red-1': { top: '50%', left: '20%' },
      'Skirt-Blue-1': { top: '52%', left: '22%' },
      'Skirt-Green-1': { top: '54%', left: '24%' }
    },
    jumpsuits: {
      'Jumpsuit-Red-1': { top: '15%', left: '18%' },
      'Jumpsuit-Blue-1': { top: '17%', left: '20%' },
      'Jumpsuit-Green-1': { top: '19%', left: '22%' }
    }
  };

  const getClothingPosition = (image) => {
    const categoryPositions = positions[category];
    const imageName = image.split('/').pop().split('.')[0] + '-1';
    return categoryPositions[imageName] || { top: '0', left: '0' };
  };

  // const selectItem = (category, image) => {
  //   setSelectedItems(prevItems => ({
  //     ...prevItems,
  //     [category]: image
  //   }));
  // };

  const selectItem = (category, image) => {
    setSelectedItems(prevItems => {
      const newItems = { ...prevItems };
      if (category === 'tops' || category === 'dresses' || category === 'jumpsuits' || category === 'sweaters') {
        newItems.tops = null;
        newItems.dresses = null;
        newItems.jumpsuits = null;
        newItems.sweaters = null;
      } else if (category === 'jeans' || category === 'skirts' || category === 'pants' || category === 'playsuits') {
        newItems.jeans = null;
        newItems.skirts = null;
        newItems.pants = null;
        newItems.playsuits = null;
      }
      newItems[category] = image;
      return newItems;
    });
  };

  const removeItem = (category) => {
    setSelectedItems(prevItems => ({
      ...prevItems,
      [category]: null
    }));
  };

  const noOutfitSelected = Object.values(selectedItems).every(item => item === null);

  const getModelClass = () => {
    return `size-${size.toLowerCase()}-${height}`;
  };

  return (
    <div className="app">
      <Left setCategory={setCategory} />
      <Home category={category} images={images[category]} selectImage={(image) => selectItem(category, image)} />
      {/* <Right setHeight={setHeight} setSize={setSize} height={height} size={size} /> */}
      <Right setHeight={setHeight} setSize={setSize} height={height} size={size} selectedItems={selectedItems} removeItem={removeItem} />


      <div className="model-display">

        {noOutfitSelected && <div className="overlay"></div>}

        <div className={`model-container ${getModelClass()}`}>
          <img src={`/assests/${height}-${size}.png`} alt="Model" className="model-image" />
          <div className="try">
            <div className="upper-body">
              {selectedItems.tops && (
                <div className='clothing-divs'>
                  <img
                    src={selectedItems.tops.replace('.jpg', '-1.png')}
                    alt="Selected Top"
                    className="clothing-image"
                  />
                </div>
              )}
              {selectedItems.dresses && (
                <div className='clothing-divs'>
                  <img
                    src={selectedItems.dresses.replace('.jpg', '-1.png')}
                    alt="Selected Dress"
                    className="clothing-image"
                  />
                </div>
              )}
              {selectedItems.jumpsuits && (
                <div className='clothing-divs jumpsuit-image'>
                  <img
                    src={selectedItems.jumpsuits.replace('.jpg', '-1.png')}
                    alt="Selected Jumpsuit"
                    className="clothing-image"
                  />
                </div>
              )}
              {selectedItems.sweaters && (
                <div className='clothing-divs'>
                  <img
                    src={selectedItems.sweaters.replace('.jpg', '-1.png')}
                    alt="Selected Sweater"
                    className="clothing-image"
                  />
                </div>
              )}
              {selectedItems.playsuits && (
                <div className='clothing-divs'>
                  <img
                    src={selectedItems.playsuits.replace('.jpg', '-1.png')}
                    alt="Selected Playsuit"
                    className="clothing-image"
                  />
                </div>
              )}
            </div>
            <div className="lower-body">
              {selectedItems.jeans && (
                <div className='clothing-divs'>
                  <img
                    src={selectedItems.jeans.replace('.jpg', '-1.png')}
                    alt="Selected Jeans"
                    className="clothing-image"
                  />
                </div>
              )}
              {selectedItems.skirts && (
                <div className='clothing-divs'>
                  <img
                    src={selectedItems.skirts.replace('.jpg', '-1.png')}
                    alt="Selected Skirt"
                    className="clothing-image"
                  />
                </div>
              )}
              {selectedItems.pants && (
                <div className='clothing-divs'>
                  <img
                    src={selectedItems.pants.replace('.jpg', '-1.png')}
                    alt="Selected Pants"
                    className="clothing-image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
