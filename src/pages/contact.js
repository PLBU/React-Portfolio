import React, {useRef} from 'react';
import {useChain, useSpring, animated} from 'react-spring'

function Contact(){
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

  useChain( [fadeDownRef, fadeRef] )

  return(
  <div className="container">
    <animated.h1 style={fadeDown} className="title">Contact me!</animated.h1>
    <div id="contact">
      <animated.div style={fade}>
        <form name="contact" method="POST">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special"/>
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
      </animated.div>
    </div>
  </div>
  )
};

export default Contact;