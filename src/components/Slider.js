import React, {useState} from 'react'
import {Transition, animated} from 'react-spring/renderprops'
import { useDrag } from 'react-use-gesture'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import '../assets/css/slider.css'

function Slider(props){
   const [index, setIndex] = useState(0)
   const [right, setRight] = useState(true)
   const [animating, setAnimating] = useState(false)

   const tranformFrom = (right) ? "translate3d(100%, 0 ,0) scale(0.5)" :  "translate3d(-100%, 0 ,0) scale(0.5)"
   const tranformLeave = (right) ? "translate3d(-50%, 0 ,0) scale(0.3)" :  "translate3d(50%, 0 ,0) scale(0.3)"

   const leftClick = () => {
      setRight(false)
      return (index === 0) ? setIndex(props.totalSlides-1) : setIndex(index-1)
   }

   const rightClick = () => {
      setRight(true)
      setIndex((index + 1)%props.totalSlides)
   }

   const bind = useDrag( ({movement: [mx]}) => {
      if (animating) return
      const moveX = (mx / window.innerHeight) * 100
      const THRESHOLD = 12

      if (moveX < -THRESHOLD) {
         rightClick()
         setAnimating(true)
      } else if (moveX > THRESHOLD) {
         leftClick()
         setAnimating(true)
      }

      setTimeout( () => setAnimating(false), 1000)
   })

   return (
      <div className="slider unselectable" {...bind()}>
         <Transition
            native
            reset
            unique
            items={index}
            from={{ opacity: 0, transform: tranformFrom}}
            enter={{ opacity: 1, transform: "translate3d(0%, 0, 0) scale(1)"}}
            leave={{ opacity: 0, transform: tranformLeave}}
         >
            {index => style => (
               <animated.div style={{...style}} className="slider-item">
                  {React.createElement(props.slides[index])}
               </animated.div>
            )}
         </Transition>
         <IoIosArrowBack className="btn-left" onClick={leftClick}/>
         <IoIosArrowForward className="btn-right" onClick={rightClick}/>
      </div>
   )
}

export default Slider