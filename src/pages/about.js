import React from 'react';

import picabout from '../images/pic-about.png'

const about = () => (
  <div className="container">
    <div>
      <h1>About me</h1>
      <div id="about">
        <img src={picabout} alt="" width="256px" className="content-left"/>
        <div className="content-right">
          <p>
            An enthusiast in iOS/Android/Web app development based in Bandung and Jakarta. 
            Always seeking challenges that provide opportunities to maximize potential.
            Recognized for persistence and inspiring willingness. Currently studying Informatics in Bandung
            Institute of Technology. At present, holding a position in IEEE ITB Student Branch as the Back-end Developer.
            Looking forward to collaborating with you!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default about;