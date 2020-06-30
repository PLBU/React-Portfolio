import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import moneige from '../images/moneige-icon.png'
import moneigelow from '../images/low-size-moneige.png'
import jaki from '../images/jaki-icon.png'
import jakilow from '../images/low-size-jaki.png'
import gplaybadge from '../images/google-play-badge.png'

export default [
   () =>
   <div className="project-card">
      <div className="project-title">
         <LazyLoadImage effect="blur" placeholderSrc={moneigelow} src={moneige} alt="" className="project-icon"/>
         <div>
            <h1>Moneige</h1>
            <h3>Sole Developer</h3>
         </div>
      </div>
      <p>
         Moneige (pronounced /'maa·nihj/) is an Android based application for personal financial management. 
         I believe other applications are too complex, therefore I created one that is straightforward using only one 
         button and one screen. All the app interfaces and logo are designed by me using Adobe XD. 
      </p>
      <LazyLoadImage effect="blur" src={gplaybadge} className="gplaybadge"/>
   </div>,
   () =>
   <div className="project-card"> 
      <div className="project-title">
         <LazyLoadImage effect="blur" placeholderSrc={jakilow} src={jaki} alt="" className="project-icon"/>
         <div>
            <h1>JaKi</h1>
            <h3>Lead Android Developer</h3>
         </div>
      </div>
      <p>
         JaKi is an Android based application that functions as the user's traffic safety assistant. 
         It is a platform for people to get the information of the dangerous traffic and report violations. 
         All the app interfaces and logo are designed by my team. Latest feature added was autosuggest search bar for the maps function. 
         This project is still ongoing.
      </p>
   </div>
]