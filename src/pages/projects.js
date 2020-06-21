import React, {useRef} from 'react';
import {useChain, useSpring, animated} from 'react-spring'

import Slider from '../components/Slider.js'
import items from '../data/ProjectsList.js'

function Projects(){
  const fadeDownRef = useRef()
  const fadeDown = useSpring({
    from: {opacity: 0, marginTop: -75},
    to: {opacity: 1, marginTop: 35},
    ref: fadeDownRef
   })

  const fadeDownRef2 = useRef()
  const fadeDown2 = useSpring({
    from: {opacity: 0, marginTop: -75},
    to: {opacity: 1, marginTop: 35},
    ref: fadeDownRef2
   })

  useChain([fadeDownRef, fadeDownRef2])

  return(
  <div className="container">
    <animated.h1 style={fadeDown} className="title">My Projects</animated.h1>
    <div id="projects">
      <animated.div style={fadeDown2}>
        <Slider slides={items} totalSlides={2}/>
      </animated.div>
    </div>
  </div>)
}

export default Projects;