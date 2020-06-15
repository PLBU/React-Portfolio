import React from 'react';
import { render } from 'react-snapshot';
import {Helmet} from "react-helmet";

import './assets/css/index.css';
import App from './components/App.js';

render(
  <React.Fragment>
    <Helmet>
      <title>Renaldi Arlin</title>
      <meta name="description" content="A website about Renaldi Arlin, his projects, and ways to reach him." />

      <meta prefix="og: http://ogp.me/ns#" name="title" content="Renaldi Arlin"/>
      <meta prefix="og: http://ogp.me/ns#" name="description" content="A website about Renaldi Arlin, his projects, and ways to reach him."/>

      <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://cocky-pare-03f8b1.netlify.app/"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Renaldi Arlin"/>
      <meta prefix="og: http://ogp.me/ns#" property="og:description" content="A website about Renaldi Arlin, his projects, and ways to reach him."/>
      <meta prefix="og: http://ogp.me/ns#" property="og:image" content="../images/bg.png"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://cocky-pare-03f8b1.netlify.app/"/>
      <meta property="twitter:title" content="Renaldi Arlin"/>
      <meta property="twitter:description" content="A website about Renaldi Arlin, his projects, and ways to reach him."/>
      <meta property="twitter:image" content="../images/bg.png"/>
    </Helmet>
    <App/>
  </React.Fragment>,
  document.getElementById('root')
);