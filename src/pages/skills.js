import React, {useRef} from 'react';
import {useChain, useSpring, useTrail, animated} from 'react-spring'

import items from '../components/SkillsList'

function Skills() {
  const trailRef = useRef()
  const trail = useTrail(items.length, {
    from: {opacity: 0, background: 'lightgrey'},
    to: {opacity: 1, background: `white`},
    ref: trailRef
  })

  const fadeDownRef = useRef()
  const fadeDown = useSpring({
    from: {opacity: 0, marginTop: -75},
    to: {opacity: 1, marginTop: 35},
    ref: fadeDownRef
   })

  useChain([fadeDownRef, trailRef] )

  return(
  <div className="container">
    <div>
      <animated.h1 style={fadeDown} className="title">My Skills</animated.h1>
      <div id="skills">
        {trail.map( (props, index) => (
          <animated.div style={props} key={items[index]} className="skills-content">
            {items[index]}
          </animated.div>
        ))}
      </div>
    </div>
  </div>)
}

export default Skills;