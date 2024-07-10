import React from 'react';

const Left = ({ setCategory }) => {
  return (
    <div className="left">
      <h2>Categories</h2>
      <button onClick={() => setCategory('tops')}>Tops</button>
      <button onClick={() => setCategory('jeans')}>Jeans</button>
    </div>
  );
};

export default Left;
