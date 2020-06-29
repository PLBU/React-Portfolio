import React, {useRef} from 'react';
import {useChain, useSpring, useTrail, animated} from 'react-spring'

function Contact(){
  var validationText = ""

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
    from: {opacity: 0, marginTop: -75},
    to: {opacity: 1, marginTop: 0},
    ref: trailRef
  })

  const validation = (e) => {
    e.preventDefault()
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.length < 4 || email.length < 10 || message.length < 10 || email.indexOf("@") === -1) {
      validationText = "Please fill all the fields correctly."
      return false
    } else {
      validationText = "Thank you, your message is successfully sent!"
      return true
    }
  }

  const formHandling = () => {
    React.createElement(
      <animated.div style={fadeDownRef} id="notif">
        {validationText}
      </animated.div>
    )

    setTimeout(() => {
      console.log('nothing')
    }, 1500);
  }

  useChain( [fadeDownRef, trailRef] )

  return(
  <div className="container">
    <animated.h1 style={fadeDown} className="title">Contact me!</animated.h1>
    <div id="contact">
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" onSubmit={validation} action={formHandling}/>
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