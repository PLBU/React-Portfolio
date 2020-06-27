import React, {useRef} from 'react';
import {useChain, useSpring, animated} from 'react-spring'

import '../assets/css/pages.css'

function Home() {
  const fadeDownRef = useRef()
  const fadeDown = useSpring({
    from: {opacity: 0, marginTop: -75},
    to: {opacity: 1, marginTop: 0},
    ref: fadeDownRef
    })

  const fadeDown2Ref = useRef()
  const fadeDown2 = useSpring({
    from: {opacity: 0, marginTop: -75},
    to: {opacity: 1, marginTop: 0},
    ref: fadeDown2Ref
    })

  const fadeRef = useRef()
  const fade = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 500},
    ref: fadeRef
  })

  useChain([fadeDownRef, fadeDown2Ref, fadeRef] )

  return (<div className="container">
    <div>
      <animated.h1 style={fadeDown} className="bigger">Hi!</animated.h1>
      <animated.h1 style={fadeDown2} className="intro bigger">I'm Renaldi Arlin</animated.h1>
      <animated.h2 style={fade}>Junior iOS/ Android/ Web App Developer</animated.h2>
    </div>
  </div>)
}

export default Home;