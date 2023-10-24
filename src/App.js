import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='App'>
      <div className='homePage'>
        <div className='introContainer'>
          <p className='introText'>hi, i'm may!</p>
          <p className='labelText'>SOFTWARE ENGINEER</p>
        </div>
        <div
          className='specialtiesContainer'
          style={{ transform: `translateX(-${offsetY * 2}px)` }}
        >
          <p className='specialtiesHeaderText'>SPECIALTIES:</p>
          <div className='specialtiesTextContainer'>
            <p className='specialtiesText'>FRONT-END</p>
            <p className='bulletText'>•</p>
          </div>
          <div className='specialtiesTextContainer'>
            <p className='specialtiesText'>BACK-END</p>
            <p className='bulletText'>•</p>
          </div>
          <div className='specialtiesTextContainer'>
            <p className='specialtiesText'>MOBILE</p>
            <p className='bulletText'>•</p>
          </div>
          <div className='specialtiesTextContainer'>
            <p className='specialtiesText'>UX/UI</p>
            <p className='bulletText'>•</p>
          </div>
        </div>
        <div
          className='graySquare'
          style={{ transform: `translateX(${offsetY * 2}px)` }}
        ></div>
        <div
          className='pinkCircle'
          style={{
            transform: `translateY(${offsetY * 1.2}px) translateX(-${
              offsetY * 0.9
            }px)`,
            top: window.innerHeight / 2 - 110,
            left: window.innerWidth / 2 - 110,
          }}
        ></div>
      </div>
      <div className='projectsPage'>
        <p className='introText'>projects</p>
      </div>
    </div>
  );
}

export default App;
