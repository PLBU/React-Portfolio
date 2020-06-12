import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { IoMdPerson, IoMdBulb } from 'react-icons/io'
import { MdWork, MdChatBubble, MdHome } from 'react-icons/md'

import '../assets/css/nav.css'

export default class Navbar extends Component {
  render () {
    return (
      <nav>
        <ul>
          <Link to='/'>
            <li>
              <IconContext.Provider value={{ className: 'icons' }}>
                <MdHome />
              </IconContext.Provider>
            </li>
          </Link>

          <Link to='/about'>
            <li>
              <IconContext.Provider value={{ className: 'icons' }}>
                <IoMdPerson />
              </IconContext.Provider>
            </li>
          </Link>

          <Link to='/skills'>
            <li>
              <IconContext.Provider value={{ className: 'icons' }}>
                <IoMdBulb />
              </IconContext.Provider>
            </li>
          </Link>

          <Link to='/projects'>
            <li>
              <IconContext.Provider value={{ className: 'icons' }}>
                <MdWork />
              </IconContext.Provider>
            </li>
          </Link>

          <Link to='/contact'>
            <li>
              <IconContext.Provider value={{ className: 'icons' }}>
                <MdChatBubble />
              </IconContext.Provider>
            </li>
          </Link>

        </ul>
      </nav>
    )
  }
}
