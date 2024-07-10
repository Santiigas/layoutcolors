import React, { useState } from 'react';
import Layout1 from '../Models/Layout1/layout1';
import Layout2 from '../Models/Layout2/layout2';
import Layout3 from '../Models/Layout3/layout3';

const layouts = [<Layout1 />, <Layout2 />, <Layout3 />];

const LayoutCarousel = () => {
  const [currentLayout, setCurrentLayout] = useState(0);

  const handleNext = () => {
    setCurrentLayout((prevLayout) => (prevLayout + 1) % layouts.length);
  };

  const handlePrev = () => {
    setCurrentLayout((prevLayout) => (prevLayout - 1 + layouts.length) % layouts.length);
  };

  return (
    <div style={{ width: '900px', height: '480px', border: '1px solid #ccc', position: 'relative' }}>
      <button onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }}>◀</button>
      <div style={{ width: '100%', height: '100%' }}>
        {layouts[currentLayout]}
      </div>
      <button onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}>▶</button>
    </div>
  );
};

export default LayoutCarousel;