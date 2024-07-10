import React from 'react';
import ReactSlider from 'react-slider';

const Right = ({ setHeight, setSize, height, size }) => {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="right">
      <h2>Adjust Model</h2>
      <div className="label-container">
        <label>Height: {height} cm</label>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          defaultValue={height}
          min={150}
          max={190}
          onChange={(value) => setHeight(value)}
        />
      </div>
      <div className="label-container">
        <label>Size: {size}</label>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          defaultValue={sizes.indexOf(size)}
          min={0}
          max={sizes.length - 1}
          renderThumb={(props, state) => <div {...props}>{sizes[state.valueNow]}</div>}
          onChange={(value) => setSize(sizes[value])}
        />
      </div>
    </div>
  );
};

export default Right;
