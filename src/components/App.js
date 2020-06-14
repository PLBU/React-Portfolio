import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Preloader, Puff } from 'react-preloader-icon';
import { IconContext } from 'react-icons'
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

import '../assets/css/app.css';

import Nav from './Nav.js';

import home from '../pages/home.js'
import about from '../pages/about.js'
import skills from '../pages/skills.js'
import projects from '../pages/projects.js'
import contact from '../pages/contact.js'

const PreloadingScreen = () => (
  <div className="preloader">
    <Preloader
      use={Puff}
      size={60}
      strokeWidth={6}
      strokeColor="#000000"
      duration={2000}
    />
  </div>
);

export default class App extends Component{
    constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      loading: true
    }
  }

  componentDidMount = async () => {
    this.loaderTimeOut().then(() => {
      this.setState({
        loading: false
      })
    })
  }

  loaderTimeOut = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 2500)
    })
  }

  render(){
    const { loading } = this.state
    if (loading) {
      return <PreloadingScreen/>
    } else {
      return(
        <Router>
          <Helmet>
            <title>Renaldi Arlin</title>
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
          <div className="main">
            <Switch>
                <Route path="/" exact component={home} />
                <Route path="/about" component={about} />
                <Route path="/skills" component={skills} />
                <Route path="/projects" component={projects} />
                <Route path="/contact" component={contact} />
            </Switch>
          </div>
          <Nav/>
          <footer>
            <div className="footer-wrapper">
              <div className="footer-content">
                <a href="https://www.instagram.com/renaldiarlin/" rel="noopener noreferrer" target="_blank">
                  <IconContext.Provider value={{className: 'footer-icons'}}>
                    <FaInstagramSquare/>
                  </IconContext.Provider>
                </a>
                <a href="https://github.com/PLBU" rel="noopener noreferrer" target="_blank">
                  <IconContext.Provider value={{className: 'footer-icons'}}>
                    <FaGithubSquare/>
                  </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/renaldi-arlin-034845192/" rel="noopener noreferrer" target="_blank">
                  <IconContext.Provider value={{className: 'footer-icons'}}>
                    <FaLinkedin/>
                  </IconContext.Provider>
                </a>
              </div>
              <div className="footer-content">
                &copy;Renaldi Arlin 2020
              </div>
            </div>
          </footer>
        </Router>
      )
    }
  }
}
