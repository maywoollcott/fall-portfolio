import React, { useEffect, useState } from 'react';
import './App.css';

import { useInView } from 'react-intersection-observer';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaSheetPlastic } from 'react-icons/fa6';

const colorCodes = {
  mediumGray: '#919598',
  lightGray: '#ebeae5',
  pink: '#f487c8',
  darkGray: '#1f1f1f',
};

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [ref, inView] = useInView();
  const [refAboutPage, inViewAboutPage] = useInView();
  const [activeProject, setActiveProject] = useState(null);
  const [screenWidth, setScreenWidth] = useState();

  const [diviiClasses, setDiviiClasses] = useState('projectButton');
  const [podplayClasses, setPodplayClasses] = useState('projectButton');
  const [jujuClasses, setJujuClasses] = useState('projectButton');
  const [lexiClasses, setLexiClasses] = useState('projectButton');
  const [librisLogClasses, setLibrisLogClasses] = useState('projectButton');
  const [bountifullClasses, setBountifullClasses] = useState('projectButton');

  const [aboutClasses, setAboutClasses] = useState('aboutPageBefore');

  const [activeDescription, setActiveDescription] = useState();
  const [activeStack, setActiveStack] = useState([]);
  const [activeWebsite, setActiveWebsite] = useState();
  const [activeGif, setActiveGif] = useState();
  const [imageLoading, setImageLoading] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  const onProjectButtonClick = (name) => {
    console.log('in view!');
    if (!activeProject) {
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
    } else {
      setImageLoading(true);
      setActiveProject(name);
      setDiviiClasses('projectButtonActive');
      setPodplayClasses('projectButtonActive');
      setJujuClasses('projectButtonActive');
      setLexiClasses('projectButtonActive');
      setLibrisLogClasses('projectButtonActive');
      setBountifullClasses('projectButtonActive');
    }
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
    }
  }, [inView]);

  useEffect(() => {
    if (inViewAboutPage) {
      console.log('in view! about page');
      setAboutClasses('aboutPage slide-in-right');
      console.log(window.innerWidth);
    }
  }, [inViewAboutPage]);

  useEffect(() => {
    if (activeProject === 'divii') {
      setActiveDescription(
        'Divii is a fullstack tarot card app built for IOS and Android.'
      );
      setActiveStack([
        'Typescript',
        'React Native',
        'Expo',
        'CSS',
        'Mongo DB',
        'Node.js',
        'AWS',
      ]);
      setActiveWebsite('https://github.com/maywoollcott/divii');
      setActiveGif('./diviiGif.gif');
    }
    if (activeProject === 'podplay') {
      setActiveDescription(
        'Podplay is a web-based podcast interface with visuals, unskippable ads, seeking, and custom skins.'
      );
      setActiveStack(['React', 'CSS', 'GITHUB PAGES']);
      setActiveWebsite('https://github.com/maywoollcott/podplay');
      setActiveGif('./podplayGif.gif');
    }

    if (activeProject === 'juju') {
      setActiveDescription(
        'Juju is a fullstack mobile app designed to send anonymous compliments and positivity. The initial compliment is sent via SMS from server and contains an app invite.'
      );
      setActiveStack([
        'Typescript',
        'React Native',
        'Expo',
        'CSS',
        'Mongo DB',
        'Twilio',
      ]);
      setActiveWebsite('https://github.com/maywoollcott/jujuclient');
      setActiveGif('./jujuGif.gif');
    }

    if (activeProject === 'librisLog') {
      setActiveDescription(
        'LibrisLog is a virtual library where users can track, log, and anylyze their reading habits.'
      );
      setActiveStack(['React', 'CSS', 'Mongo DB', 'Node.js']);
      setActiveWebsite('https://github.com/maywoollcott/librislog');
      setActiveGif('./librisGif.gif');
    }

    if (activeProject === 'lexi') {
      setActiveDescription(
        'The vocabulary app for grownups: build your lexicon.'
      );
      setActiveStack(['Typescript', 'React Native', 'Expo', 'CSS', 'Mongo DB']);
      setActiveWebsite('https://github.com/maywoollcott/lexi-server');
      setActiveGif('./lexiGif.gif');
    }

    if (activeProject === 'bountifull') {
      setActiveDescription(
        'Bountifull is fullstack mobile app that tracks your health - not your calories.'
      );
      setActiveStack(['React Native', 'Expo', 'CSS', 'Mongo DB']);
      setActiveWebsite('https://tinyurl.com/yc6ydbvw');
      setActiveGif('./bountifullGif.gif');
    }
    setImageLoading(false);
  }, [activeProject]);

  useEffect(() => {
    console.log(window.innerWidth);
    setScreenWidth(window.innerWidth);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='App'>
      <div className='homePage'>
        <div
          className='introContainer'
          style={{ transform: `translateX(-${offsetY * 2}px)` }}
        >
          <p className='introText'>hi, i'm may!</p>
          <p className='labelText'>SOFTWARE ENGINEER</p>
        </div>
        <div
          className='specialtiesContainer'
          style={{ transform: `translateX(-${offsetY * 2}px)` }}
        >
          <p className='specialtiesHeaderText'>EXPERIENCED IN:</p>
          <div className='specialtiesTextContainer'>
            <p className='specialtiesText'>FRONTEND</p>
            <p className='bulletText'>•</p>
          </div>
          <div className='specialtiesTextContainer'>
            <p className='specialtiesText'>BACKEND</p>
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
        {screenWidth > 500 ? (
          <>
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
          </>
        ) : null}
      </div>
      <div className='break'></div>
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
            <div className='projectButtonContainerActive'>
              <p className='activeProjectsHeader'>PROJECTS</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div className='verticalButtonContainer'>
                  <div
                    className={diviiClasses}
                    style={{ backgroundColor: colorCodes.pink }}
                    onClick={() => onProjectButtonClick('divii')}
                  >
                    <p
                      className={
                        activeProject === 'divii'
                          ? 'projectTitleActive active'
                          : 'projectTitleActive'
                      }
                    >
                      divii
                    </p>
                  </div>
                  <div
                    className={jujuClasses}
                    style={{ backgroundColor: colorCodes.lightGray }}
                    onClick={() => onProjectButtonClick('juju')}
                  >
                    <p
                      className={
                        activeProject === 'juju'
                          ? 'projectTitleActive active'
                          : 'projectTitleActive'
                      }
                    >
                      juju
                    </p>
                  </div>
                  <div
                    className={librisLogClasses}
                    style={{ backgroundColor: colorCodes.mediumGray }}
                    onClick={() => onProjectButtonClick('librisLog')}
                  >
                    <p
                      className={
                        activeProject === 'librisLog'
                          ? 'projectTitleActive active'
                          : 'projectTitleActive'
                      }
                    >
                      libris log
                    </p>
                  </div>
                </div>
                <div className='verticalButtonContainer'>
                  <div
                    className={podplayClasses}
                    style={{ backgroundColor: colorCodes.mediumGray }}
                    onClick={() => onProjectButtonClick('podplay')}
                  >
                    <p
                      className={
                        activeProject === 'podplay'
                          ? 'projectTitleActive active'
                          : 'projectTitleActive'
                      }
                    >
                      podplay
                    </p>
                  </div>
                  <div
                    className={lexiClasses}
                    style={{ backgroundColor: colorCodes.pink }}
                    onClick={() => onProjectButtonClick('lexi')}
                  >
                    <p
                      className={
                        activeProject === 'lexi'
                          ? 'projectTitleActive active'
                          : 'projectTitleActive'
                      }
                    >
                      lexi
                    </p>
                  </div>
                  <div
                    className={bountifullClasses}
                    style={{ backgroundColor: colorCodes.lightGray }}
                    onClick={() => onProjectButtonClick('bountifull')}
                  >
                    <p
                      className={
                        activeProject === 'bountifull'
                          ? 'projectTitleActive active'
                          : 'projectTitleActive'
                      }
                    >
                      bountifull
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='descriptionWidthContainer'>
              {!imageLoading && (
                <div>
                  <div className='descriptionHeaderContainer'>
                    <p className='descriptionName'>{activeProject}</p>
                    <a
                      className='descriptionWebsite'
                      target='_blank'
                      rel='noopener noreferrer'
                      href={activeWebsite}
                    >
                      GitHub
                    </a>
                  </div>
                  <p className='descriptionText'>
                    {activeDescription}{' '}
                    {activeProject === 'podplay' ? (
                      <a
                        className='descriptionWebsitePink'
                        target='_blank'
                        rel='noopener noreferrer'
                        href={'https://maywoollcott.github.io/podplay'}
                      >
                        Check it out here!
                      </a>
                    ) : (
                      ''
                    )}
                  </p>
                  <div className='stackContainer'>
                    <p className='stackText'>STACK</p>
                    {activeStack.map((stack) => {
                      return <p className='stackListText'>{stack}</p>;
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className='videoContainer'>
              {!imageLoading && (
                <img
                  className={
                    activeProject === 'librisLog' || activeProject === 'podplay'
                      ? 'computerGif'
                      : 'phoneGif'
                  }
                  src={activeGif}
                  alt={''}
                ></img>
              )}
            </div>
          </div>
        )}
      </div>
      <div className='break'></div>
      <div ref={refAboutPage} className={aboutClasses}>
        <img className='aboutImgContainer' src={'./meFall.png'} alt={''}></img>
        <div className='bioContainer'>
          <p className='aboutHeader'>about</p>
          <p className='bioText'>
            My name is May Woollcott, and I'm a fullstack software engineer
            currently based in Washington, DC. I'm passionate about creating
            beautiful, engaging user experiences. Over the last three years,
            I've worked for some pretty cool companies, including Acast and
            Better. Check out my resume{' '}
            <span>
              <a
                href='./MayWoollcottResumePdf.pdf'
                download
                className='bioTextLink'
              >
                here
              </a>
            </span>
            {''} or below. <br></br>
            <br></br>When I'm not coding, you can find me playing around with 3D
            animation in Blender and Unreal, working my way through The Food Lab
            (J. Kenji Lopez-Alt's masterpiece of a cookbook), or hunting for a
            new podcast to binge. I have two cats, Arthur and Wendy, and a
            Golden Retriever puppy, Perry. They tolerate each other. We're
            working on it.
          </p>
          <div className='iconContainer'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://github.com/maywoollcott'}
            >
              <AiFillGithub className='iconLink' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://www.linkedin.com/in/maycollinswoollcott/'}
            >
              <BsLinkedin className='iconLink' size={34} />{' '}
            </a>
            <a
              href='mailto:maywoollcott@gmail.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <MdEmail className='iconLink' size={40} />
            </a>
            <a href='./MayWoollcottResumePdf.pdf' download>
              <FaSheetPlastic className='iconLink' size={33} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
