import React from 'react'

import './nav.css';
import { Link } from 'react-router';

function AppNav() {
  return (
    <div id="app-nav-id">

        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/courses'}>Courses</Link>

        {/* <a href='/'>
            Home
        </a>

        <a href='/contact'>
            Contact
        </a>

        <a href='/about'>
            About
        </a> */}
    </div>
  )
}

export default AppNav