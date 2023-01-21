import React from 'react';
import './navbar.css';
import { Button } from '..';

function index() {
    return (
        <header className="nav-header">
      <nav>
        <div className="logo-box">
          <a href="index.html">
            <img src={require('../../assets/images/logo.png')} alt="" />
          </a>
        </div>
        <ul>
          {/* <li><a href="#">Use Cases</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Pricing</a></li> */}
          <li><Button type="primary" text="Sign Up"/></li>
          <li><Button type="outline" text="Sign In"/></li>
        </ul>
      </nav>
    </header>
    );
}

export default index;