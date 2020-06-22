import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import moneige from '../images/moneige-icon.png'
import jaki from '../images/jaki-icon.png'

export default [
   () =>
   <div>
      <LazyLoadImage effect="blur" src={moneige} alt="" className="project-item"/>
   </div>,
   () =>
   <div>
      <LazyLoadImage effect="blur" src={jaki} alt="" className="project-item"/>
   </div>
]