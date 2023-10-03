import React from 'react';
import './Navbar.css';
import logo from './images/logo for cyber event(red without txt).png';

export default function Navbar() {

  return (

    <div class="header-container">
        <div class="logo">
            <img src={logo} alt="Logo"/>
        </div>
        <div class="nav">
            <a href="/" class="nav-item" >Home</a>
            <a href="/" class="nav-item" >Events</a>
            <a href="/" class="nav-item" >CTF</a>
            <a href="/" class="nav-item" >Contact</a>
            <span class="nav-indicator"></span>
        </div>
    </div>
  )
}
