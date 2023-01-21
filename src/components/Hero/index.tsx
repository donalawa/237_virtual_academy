import React from 'react';
import './Hero.css';

function index() {
    return (
        <section className="hero-section">
        <div className="hero-section-text">
          <p className="heading">Your command center for remote work</p>
          <p>
            Roadmap your day, stay in sync with your team, and have fewer, better
            meetings.
          </p>
          <a href="#" className="btn primary-btn">Get Started</a>
        </div>
        <div className="hero-section-img">
          <img className="hero-img" src={require('../../assets/images/hero.png')} alt="" />
        </div>
      </section>
    );
}

export default index;