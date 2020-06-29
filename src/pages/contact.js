import React, {useRef} from 'react';
import {useChain, useSpring, useTrail, animated} from 'react-spring'

function Contact(){
  const items = [
    <div className="profile">
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
    </div>,
    <div className="field">
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="7" ></textarea>
    </div>,
    <input type="submit" value="Send" className="submit"/>
  ]

  const fadeDownRef = useRef()
  const fadeDown = useSpring({
    from: {opacity: 0, marginTop: -75},
    to: {opacity: 1, marginTop: 35},
    ref: fadeDownRef
   })

  const trailRef = useRef()
  const trail = useTrail(items.length, {
    from: {opacity: 0},
    to: {opacity: 1},
    ref: trailRef
  })

  var testForm = document.querySelector("#contact form");
      
  testForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(testForm);
    fetch(testForm.getAttribute('action'), {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams(formData).toString()
    })
    .then(res => {
      if (res) {
        alert("Thank you, your message is sent!")
      }
    });
  });

  useChain( [fadeDownRef, trailRef] )

  return(
  <div className="container">
    <animated.h1 style={fadeDown} className="title">Contact me!</animated.h1>
    <div id="contact">
      <form name="contact" method="POST" action="/#contact">
        <input type="hidden" name="form-name" value="contact"/>
        {trail.map( (props, index) => (
          <animated.div style={props} key={items[index]}>
            {items[index]}
          </animated.div>
        ))}
      </form>
    </div>
  </div>
  )
};

export default Contact;