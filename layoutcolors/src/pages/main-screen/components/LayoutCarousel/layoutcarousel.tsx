import React, { useState } from 'react';
import Layout1 from '../Models/Layout1/layout1';
import Layout2 from '../Models/Layout2/layout2';
import Layout3 from '../Models/Layout3/layout3';
import Layout4 from '../Models/Layout4/layout4';
import Layout5 from '../Models/Layout5/layout5';
import Layout6 from '../Models/Layout6/layout6';
import Layout7 from '../Models/Layout7/layout7';
import "./layoutcarousel.css"
import setaesquerda from "./images/setaleft.png"
import setadireita from "./images/setaright.png"

const layouts = [<Layout1 />, <Layout2 />, <Layout3 />, <Layout7 />, <Layout4 />, 
<Layout5 />, <Layout6 />];

const LayoutCarousel = () => {
  const [currentLayout, setCurrentLayout] = useState(0);

  const handleNext = () => {
    setCurrentLayout((prevLayout) => (prevLayout + 1) % layouts.length);
  };

  const handlePrev = () => {
    setCurrentLayout((prevLayout) => (prevLayout - 1 + layouts.length) % layouts.length);
  };

  return (
    <div className='layoutCarousel'>
      <button onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: '-0px', transform: 'translateY(-50%)' }}> 
      <img src={setaesquerda} alt="" /></button>
      <div className='carrousel'>
        {layouts[currentLayout]}
      </div>
      <button onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}>
      <img src={setadireita} alt="" /></button>
    </div>
  );
};

export default LayoutCarousel;