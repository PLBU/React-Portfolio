import React, {useRef, useState, useEffect} from 'react';
import {useChain, useSpring, useTrail, animated} from 'react-spring'
import {FaArrowDown} from 'react-icons/fa'

function Contact(){
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setSrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

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

  const notifRef = useRef()
  const notif = useSpring({
    from: {opacity: 0, transform: "translate3d(0, -24%, 0)"},
    to: {opacity: (scrollPosition < 120) ? 1 : 0,
         transform: (scrollPosition < 120) ? "translate3d(0, 0%, 0)" : "translate3d(0, -24%, 0)"},
    ref: notifRef
  })

  const validation = (e) => {    
    let testForm = document.querySelector("#contact form");
    const formData = new FormData(testForm)

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.length < 4 || email.length < 10 || message.length < 10 || email.indexOf("@") === -1) {
      alert("Please fill all the fields correctly.")
      e.preventDefault()

      return false
    } else {
      e.preventDefault()
      
      fetch(testForm.getAttribute('action'), {
        method: "POST",
        headers: { 'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                    "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
        .then(() => {
          document.getElementById("name").value = ""
          document.getElementById("email").value = ""
          document.getElementById("message").value = ""
          alert("Thank you, your message is sent!") } )
        .catch(error => alert(error))
    }
  } 

  useChain( [fadeDownRef, trailRef, notifRef] )

  return(
  <div className="container">
    <animated.h1 style={fadeDown} className="title">Contact me!</animated.h1>
    <div id="contact">
      <form name="contact" method="POST" onSubmit={validation} action="/#contact">
        <input type="hidden" name="form-name" value="contact"/>
        {trail.map( (props, index) => (
          <animated.div style={props} key={items[index]}>
            {items[index]}
          </animated.div>
        ))}
      </form>
    </div>
    <animated.div style={notif} className="notif">
      <h2>Or through my social media</h2>
      <FaArrowDown className="notif-icon"/>
    </animated.div>
  </div>
  )
}

export default Contact;