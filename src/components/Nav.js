import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { IoMdPerson, IoMdBulb } from "react-icons/io";
import { MdWork, MdChatBubble, MdHome } from "react-icons/md";

import '../assets/css/nav.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/"> 
              <IconContext.Provider value={{className: "icons" }}>
                <MdHome/>
              </IconContext.Provider>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <IconContext.Provider value={{className: "icons" }}>
                <IoMdPerson/>
              </IconContext.Provider>
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <IconContext.Provider value={{className: "icons" }}>
                <IoMdBulb/>
              </IconContext.Provider>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <IconContext.Provider value={{className: "icons" }}>
                <MdWork/>
              </IconContext.Provider>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <IconContext.Provider value={{className: "icons" }}>
                <MdChatBubble/>
              </IconContext.Provider>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}