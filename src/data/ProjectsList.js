import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import moneigelow from '../images/low-size-moneige.png'
import jakilow from '../images/low-size-jaki.png'
import moneige from '../images/moneige-icon.png'
import jaki from '../images/jaki-icon.png'

export default [
   () =>
   <div>
      <LazyLoadImage effect="blur" placeholderSrc={moneigelow} src={moneige} alt="" className="project-item"/>
   </div>,
   () =>
   <div>
      <LazyLoadImage effect="blur" placeholderSrc={jakilow} src={jaki} alt="" className="project-item"/>
   </div>
]