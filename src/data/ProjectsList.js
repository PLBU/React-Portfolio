import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// importing images
import moneige from '../images/moneige-icon.png'
import moneigelow from '../images/low-size-moneige.png'
import jaki from '../images/jaki-icon.png'
import jakilow from '../images/low-size-jaki.png'
import akademis from '../images/logo-akademis.png'
import akademislow from '../images/low-size-akademis.png'
import gplaybadge from '../images/google-play-badge.png'

export default [
   () =>
   <div className="project-card">
      <div className="project-title">
         <LazyLoadImage effect="blur" placeholderSrc={akademislow} src={akademis} alt="" className="project-icon"/>
         <div>
            <h1>Akademis.id</h1>
            <h3>Mobile App Developer</h3>
         </div>
      </div>
      <p>
         Akademis.id is a digital platform that is used more than 200,000 people for its educational functions. 
         My responsibilities in this project is to build the Frontend Mobile App with 3 main features in this project: 
         Tryout system, Virtual Class as a marketplace for self-employed teachers, and lastly Payment system that is integrated with backend web service.
         All design and illustration is created by another team member.
      </p>
      <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.akademis" className="gplaybadge"><img alt='Get it on Google Play' src={gplaybadge}/></a>
   </div>,
   () =>
   <div className="project-card"> 
      <div className="project-title">
         <LazyLoadImage effect="blur" placeholderSrc={jakilow} src={jaki} alt="" className="project-icon"/>
         <div>
            <h1>JaKi</h1>
            <h3>Mobile App Developer</h3>
         </div>
      </div>
      <p>
         JaKi is an Android based application that functions as the user's traffic safety assistant. 
         It is a platform for people to get the information of the dangerous traffic and report violations. 
         The app mainly has 3 features: Auto-routing navigation, Report troublespot in vicinity, Education feature as 
         Articles, Infographics, Videos, and Podcasts.
         All the app interfaces and logo are designed by my team.
      </p>
      <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.itbjaki" className="gplaybadge"><img alt='Get it on Google Play' src={gplaybadge}/></a>
   </div>,
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
      <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=site.linar.moneige&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" className="gplaybadge"><img alt='Get it on Google Play' src={gplaybadge}/></a>
   </div>
]