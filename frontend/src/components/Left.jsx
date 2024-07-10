import React from 'react';

const Left = ({ setCategory }) => {
  return (
    <div className="left">
      <h2>Categories</h2>
      <button onClick={() => setCategory('tops')}>Tops</button>
      <button onClick={() => setCategory('jeans')}>Jeans</button>
      <button onClick={() => setCategory('dresses')}>Dresses</button>
      <button onClick={() => setCategory('skirts')}>Skirts</button>
      <button onClick={() => setCategory('jumpsuits')}>Jumpsuits</button>
      <button onClick={() => setCategory('pants')}>Pants</button>
      <button onClick={() => setCategory('playsuits')}>Playsuits</button>
      <button onClick={() => setCategory('sweaters')}>Sweaters</button>
    </div>
  );
};

export default Left;
