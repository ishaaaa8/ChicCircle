import React from 'react';
import ReactSlider from 'react-slider';
import { useState } from 'react';

const Right = ({ setHeight, setSize, height, size, selectedItems = {}, removeItem }) => {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const [inputHeight, setInputHeight] = useState(height);
  const [inputSize, setInputSize] = useState(size);

  const handleTry = () => {
    setHeight(inputHeight);
    setSize(inputSize);
  };

  return (

    <div className="right">
      <h2>Adjust Model</h2>
      <div>
        <span>Height</span>
        <input 
          type='text' 
          placeholder='Enter your Height in cm' 
          value={inputHeight}
          onChange={(e) => setInputHeight(e.target.value)}
        />
      </div>
      <div>
        <span>Size</span>
        <input 
          type='text' 
          placeholder='Enter your size' 
          value={inputSize}
          onChange={(e) => setInputSize(e.target.value)}
        />
      </div>
      <button onClick={handleTry}>Try</button>
      <div className="selected-items">
        <h3>Selected Items</h3>
        <ul>
          {Object.entries(selectedItems).map(([category, item]) => (
            item && (
              <li key={category}>
                {/* console.log(item); */}
                {item.split('/').pop().replace(/-/g, ' ').replace('.jpg', '')}
                <button onClick={() => removeItem(category)}>X</button>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Right;
