import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Preloader, Puff } from 'react-preloader-icon';

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
          <footer>&copy;Renaldi Arlin 2020</footer>
        </Router>
      )
    }
  }
}
