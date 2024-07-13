import React from 'react';

const Left = ({ setCategory }) => {
  return (
    <div className="left">
      <h2>Categories</h2>
      <button onClick={() => setCategory('tops')} className='left-btn'>Tops</button>
      <button onClick={() => setCategory('jeans')} className='left-btn'>Jeans</button>
      <button onClick={() => setCategory('dresses')} className='left-btn'>Dresses</button>
      <button onClick={() => setCategory('skirts')} className='left-btn'>Skirts</button>
      <button onClick={() => setCategory('jumpsuits')} className='left-btn'>Jumpsuits</button>
      <button onClick={() => setCategory('pants')} className='left-btn'>Pants</button>
      <button onClick={() => setCategory('playsuits')} className='left-btn'>Playsuits</button>
      <button onClick={() => setCategory('sweaters')} className='left-btn'>Sweaters</button>
    </div>
  );
};

export default Left;
