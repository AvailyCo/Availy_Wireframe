import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import logo from './../../Assets/Availy_Logo1.png';
import TokenService from '../../Services/token-service';

export class NavBar extends Component {
  render() {
    return (
      <nav id="navBar">
        <div id="navBrand">
          <Link to="/" >
            <img
              id="navIcon"
              src={logo}
              alt="Availy Icon"
            />
          </Link>
          <Link to="/">
            <h2 id="navLogo">Availy</h2>
          </Link>
        </div>
        
        <div id="navSpacer" />
        
        <div id="accessAcct">
          <Link to="/login" id="login">Log In</Link>
          <Link to="/signup" id="signUp">Sign Up</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;