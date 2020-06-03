import React from 'react';
import ReactDOM from 'react-dom';
import { Sugar } from 'react-preloaders';

import './assets/css/index.css';
import App from './components/App.js';

ReactDOM.render(
  <React.Fragment>
    <App/>
    <Sugar background="white" time={0}/>
  </React.Fragment>,
  document.getElementById('root')
);