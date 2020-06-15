import React from 'react';
import { render } from 'react-snapshot';
import {Helmet} from "react-helmet";

import './assets/css/index.css';
import App from './components/App.js';

render(
  <React.Fragment>
    <Helmet>
      <title>Renaldi Arlin</title>

      <meta prefix="og: http://ogp.me/ns#" name="title" content="Renaldi Arlin"/>
      <meta prefix="og: http://ogp.me/ns#" name="description" content="A website about Renaldi Arlin, his projects, and ways to reach him."/>

      <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://cocky-pare-03f8b1.netlify.app/"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Renaldi Arlin"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:description" content="A website about Renaldi Arlin, his projects, and ways to reach him."/>
      <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://mmc.tirto.id/image/otf/1024x535/2016/07/26/TIRTO-20140522_batman_warner-bros_ratio-16x9.jpg"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://cocky-pare-03f8b1.netlify.app/"/>
      <meta property="twitter:title" content="Renaldi Arlin"/>
      <meta property="twitter:description" content="A website about Renaldi Arlin, his projects, and ways to reach him."/>
      <meta property="twitter:image" content="https://mmc.tirto.id/image/otf/1024x535/2016/07/26/TIRTO-20140522_batman_warner-bros_ratio-16x9.jpg"/>
    </Helmet>
    <App/>
  </React.Fragment>,
  document.getElementById('root')
);