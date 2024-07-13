import React, { useState } from 'react';
import { useColors } from './colorcontext';
import "./colorpicker.css"

const ColorPicker = ({ title, colorKey }) => {
  const { colors, setColors } = useColors();
  const color = colors[colorKey];

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColors((prevColors) => ({
      ...prevColors,
      [colorKey]: newColor,
    }));
  };

  return (
    <div className="color_configuration">
      <h1 id="mainTitleColor">{title}</h1>
        <input className='colorPicker'
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      <div className="colorCode">
        <input
          className="colorUser"
          type="text"
          value={color}
          onChange={handleColorChange}
          placeholder="#000000"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
