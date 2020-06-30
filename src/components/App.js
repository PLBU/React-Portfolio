import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Preloader, Puff } from 'react-preloader-icon'
import { IconContext } from 'react-icons'
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"

import '../assets/css/app.css'

import Nav from './Nav.js'

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
)

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

    let viewheight = window.innerHeight
    let viewwidth = window.innerWidth
    if (viewwidth <= 1199) {
      let viewport = document.querySelector("meta[name=viewport]")
      viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0")
    }
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
                &copyRenaldi Arlin 2020
              </div>
            </div>
          </footer>
        </Router>
      )
    }
  }
}
