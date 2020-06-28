import React, {useRef} from 'react'
import {useChain, useSpring, animated} from 'react-spring'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import picaboutlow from '../images/low-size-pic-about.png'
import picabout from '../images/pic-about.png'

function About(){
  const fadeDownRef = useRef()
  const fadeDown = useSpring({
    from: {opacity: 0, marginTop: -75},
    to: {opacity: 1, marginTop: 35},
    ref: fadeDownRef
   })

  const fadeRef = useRef()
  const fade = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 500},
    ref: fadeRef
  })

  const fadeRef2 = useRef()
  const fade2 = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 500},
    ref: fadeRef2
  })

  useChain([fadeDownRef, fadeRef, fadeRef2] )

  return(
  <div className="container">
    <animated.h1 style={fadeDown} className="title">About me</animated.h1>
    <div id="about">
      <animated.div style={fade} className="content-left">
        <LazyLoadImage effect="blur" placeholderSrc={picaboutlow} src={picabout} alt="" className="about-img"/>
      </animated.div>
      <animated.div style={fade2} className="content-right">
        <p>
          An enthusiast in Android and Web app development based in Bandung and Jakarta. 
          Always seeking challenges that provide opportunities to maximize potential.
          Recognized for persistence and inspiring willingness. Currently studying Informatics in Bandung
          Institute of Technology. At present, holding a position in IEEE ITB Student Branch as the Back-end Developer.
          Looking forward to collaborating with you!
        </p>
      </animated.div>
    </div>
  </div>
  )
};

export default About;