import React, { useEffect, useState } from 'react';
import './App.css';

import { useInView } from 'react-intersection-observer';
import anime from 'animejs/lib/anime.es.js';

const colorCodes = {
  mediumGray: '#919598',
  lightGray: '#ebeae5',
  pink: '#f487c8',
  darkGray: '#1f1f1f',
};

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [ref, inView] = useInView();
  const [activeProject, setActiveProject] = useState(null);

  const [diviiClasses, setDiviiClasses] = useState('projectButton');
  const [podplayClasses, setPodplayClasses] = useState('projectButton');
  const [jujuClasses, setJujuClasses] = useState('projectButton');
  const [lexiClasses, setLexiClasses] = useState('projectButton');
  const [librisLogClasses, setLibrisLogClasses] = useState('projectButton');
  const [bountifullClasses, setBountifullClasses] = useState('projectButton');

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  const onProjectButtonClick = (name) => {
    console.log('in view!');
    setDiviiClasses('projectButton scale-out-center');
    setPodplayClasses('projectButton scale-out-center');
    setJujuClasses('projectButton scale-out-center');
    setLexiClasses('projectButton scale-out-center');
    setLibrisLogClasses('projectButton scale-out-center');
    setBountifullClasses('projectButton scale-out-center');
    setTimeout(() => {
      setActiveProject(name);
      setDiviiClasses('projectButtonActive');
      setPodplayClasses('projectButtonActive');
      setJujuClasses('projectButtonActive');
      setLexiClasses('projectButtonActive');
      setLibrisLogClasses('projectButtonActive');
      setBountifullClasses('projectButtonActive');
    }, 400);
    console.log(name);
  };

  useEffect(() => {
    if (inView) {
      console.log('in view!');
      setDiviiClasses('projectButton slide-in-blurred-left-6');
      setPodplayClasses('projectButton slide-in-blurred-left-5');
      setJujuClasses('projectButton slide-in-blurred-left-4');
      setLexiClasses('projectButton slide-in-blurred-left-3');
      setLibrisLogClasses('projectButton slide-in-blurred-left-2');
      setBountifullClasses('projectButton slide-in-blurred-left-1');
      // anime({
      //   targets: '.projectsHeader',
      //   translateX: 250,
      //   duration: 1200,
      //   delay: 500,
      // });
    }
  }, [inView]);

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
              offsetY * 1.4
            }px)`,
            top: window.innerHeight / 2 - 110,
            left: window.innerWidth / 2 - 110,
          }}
        ></div>
      </div>
      <div className='projectsPage'>
        {activeProject === null && (
          <>
            <p ref={ref} className={'projectsHeader'}>
              projects
            </p>
            <div className='projectsContainer'>
              <div
                className={diviiClasses}
                style={{ backgroundColor: colorCodes.pink }}
                onClick={() => onProjectButtonClick('divii')}
              >
                <p className='projectTitle'>divii</p>
                <p className='projectLabel'>FULLSTACK MOBILE APP</p>
              </div>
              <div
                className={podplayClasses}
                style={{ backgroundColor: colorCodes.mediumGray }}
                onClick={() => onProjectButtonClick('podplay')}
              >
                <p className='projectTitle'>podplay</p>
                <p className='projectLabel'>WEB APP</p>
              </div>
              <div
                className={jujuClasses}
                style={{ backgroundColor: colorCodes.lightGray }}
                onClick={() => onProjectButtonClick('juju')}
              >
                <p className='projectTitle'>juju</p>
                <p className='projectLabel'>FULLSTACK MOBILE APP</p>
              </div>
              <div
                className={lexiClasses}
                style={{ backgroundColor: colorCodes.pink }}
                onClick={() => onProjectButtonClick('lexi')}
              >
                <p className='projectTitle'>lexi</p>
                <p className='projectLabel'>FULLSTACK MOBILE APP</p>
              </div>
              <div
                className={librisLogClasses}
                style={{ backgroundColor: colorCodes.mediumGray }}
                onClick={() => onProjectButtonClick('librisLog')}
              >
                <p className='projectTitle'>libris log</p>
                <p className='projectLabel'>FULLSTACK WEB APP</p>
              </div>
              <div
                className={bountifullClasses}
                style={{ backgroundColor: colorCodes.lightGray }}
                onClick={() => onProjectButtonClick('bountifull')}
              >
                <p className='projectTitle'>bountifull</p>
                <p className='projectLabel'>FULLSTACK MOBILE APP</p>
              </div>
            </div>
          </>
        )}
        {activeProject !== null && (
          <div className='activeProjectContainer'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>PROJECTS</p>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className='verticalButtonContainer'>
                  <div
                    className={diviiClasses}
                    style={{ backgroundColor: colorCodes.pink }}
                    onClick={() => onProjectButtonClick('divii')}
                  >
                    <p className='projectTitleActive'>divii</p>
                  </div>
                  <div
                    className={jujuClasses}
                    style={{ backgroundColor: colorCodes.lightGray }}
                    onClick={() => onProjectButtonClick('juju')}
                  >
                    <p className='projectTitleActive'>juju</p>
                  </div>
                  <div
                    className={librisLogClasses}
                    style={{ backgroundColor: colorCodes.mediumGray }}
                    onClick={() => onProjectButtonClick('librisLog')}
                  >
                    <p className='projectTitleActive'>libris log</p>
                  </div>
                </div>
                <div className='verticalButtonContainer'>
                  <div
                    className={podplayClasses}
                    style={{ backgroundColor: colorCodes.mediumGray }}
                    onClick={() => onProjectButtonClick('podplay')}
                  >
                    <p className='projectTitleActive'>podplay</p>
                  </div>
                  <div
                    className={lexiClasses}
                    style={{ backgroundColor: colorCodes.pink }}
                    onClick={() => onProjectButtonClick('lexi')}
                  >
                    <p className='projectTitleActive'>lexi</p>
                  </div>
                  <div
                    className={bountifullClasses}
                    style={{ backgroundColor: colorCodes.lightGray }}
                    onClick={() => onProjectButtonClick('bountifull')}
                  >
                    <p className='projectTitleActive'>bountifull</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
