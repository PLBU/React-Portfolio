import React from 'react';

import { IconContext } from 'react-icons'
import { DiDart, DiHtml5, DiCss3, DiJsBadge, DiAndroid, DiPhotoshop, DiReact, DiMongodb, DiNodejsSmall, DiPython, DiJava, DiCodeBadge, DiSqllite, DiGit } from 'react-icons/di'
import { FaPhp, FaAdobe, FaFigma } from 'react-icons/fa'
import { RiFlutterFill } from "react-icons/ri"

const list = [
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'orangered' }}>
        <DiHtml5 />
    </IconContext.Provider>
    <p>HTML</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'dodgerblue' }}>
        <DiCss3 />
    </IconContext.Provider>
    <p>CSS</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'gold' }}>
        <DiJsBadge />
    </IconContext.Provider>
    <p>JavaScript</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: `mediumpurple` }}>
        <FaPhp />
    </IconContext.Provider>
    <p>php</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: `green` }}>
      <DiMongodb />
    </IconContext.Provider>
    <p>MongoDB</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'dodgerblue'}}>
      <DiDart />
    </IconContext.Provider>
    <p>Dart</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: `deepskyblue` }}>
      <DiReact />
    </IconContext.Provider>
    <p>React.js</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: `deepskyblue` }}>
      <DiReact />
    </IconContext.Provider>
    <p>React Native</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: `limegreen` }}>
      <DiNodejsSmall />
    </IconContext.Provider>
    <p>Node.js</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'lightsteelblue' }}>
      <DiJava />
    </IconContext.Provider>
    <p style={{color: 'orange'}}>Java</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons' }}>
      <DiCodeBadge />
    </IconContext.Provider>
    <p>XML</p>
  </div>,
    <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'navy' }}>
      <DiSqllite />
    </IconContext.Provider>
    <p>SQLite</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'orangered' }}>
      <DiGit />
    </IconContext.Provider>
    <p>Git</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons'}}>
      <DiCodeBadge />
    </IconContext.Provider>
    <p>C/C++</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'royalblue' }}>
      <DiPython />
    </IconContext.Provider>
    <p>Python</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'dodgerblue' }}>
      <RiFlutterFill />
    </IconContext.Provider>
    <p>Flutter</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'mediumspringgreen' }}>
      <DiAndroid />
    </IconContext.Provider>
    <p>Android Studio</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'red' }}>
      <FaAdobe />
    </IconContext.Provider>
    <p>Adobe XD</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'darkblue' }}>
      <DiPhotoshop />
    </IconContext.Provider>
    <p>Photoshop</p>
  </div>,
  <div>
    <IconContext.Provider value={{ className: 'skills-icons', color: 'lightgreen' }}>
      <FaFigma />
    </IconContext.Provider>
    <p>Figma</p>
  </div>,
]

export default list;