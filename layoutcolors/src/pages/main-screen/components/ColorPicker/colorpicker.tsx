import React, { useState } from 'react';
import "./colorpicker.css"

const ColorPicker = ({title}) => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
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
