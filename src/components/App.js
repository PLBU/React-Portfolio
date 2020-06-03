import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import '../assets/css/app.css';

import Nav from './Nav.js';

import home from '../pages/home.js'
import about from '../pages/about.js'
import skills from '../pages/skills.js'
import projects from '../pages/projects.js'
import contact from '../pages/contact.js'

export default class App extends Component{
  render(){
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
