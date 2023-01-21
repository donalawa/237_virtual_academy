import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import { BsCheck2Circle }  from 'react-icons/bs';
import { Navbar, Hero } from '../../components';
import './home.css';

function index() {
    return (
        <div className="landing-page">
        <div className="page">
          <div className="hero">
            <div className="con">
              <div className="sec-1">
                <h5>Welcome To</h5>
                <img
                  className="logo"
                  src={require('../../assets/images/logo/logo.png')}
                  alt=""
                />
                <h1>
                    Revolutionize your education with 237 Virtual Academy.
                </h1>
                <p>
                  Our Distance Learning Solutions provides you with all the tools you need to succeed in your studies from anywhere. Join live sessions, access course content and assessments, and communicate with your classmates and teacher."
                </p>
                <div className="hero-btns">
                  <a href="/register" className="btn btn-primary"
                    >Get Started Now</a>
                  <a href="/login" className="btn btn-secondary"
                    >Login</a>
                  <a href="" className="get-started"
                    >View documentation
                    <img src="../assets/images/icons/file-dark.svg" alt=""
                  /></a>
                </div>
              </div>
              <div className="sec-2">
                <img src={require('../../assets/images/illustrtions/landing-1.png')} alt="" />
              </div>
            </div>
          </div>

          <section>
            <div className="how-it-works">
              <div className="con">
                <div className="sec-1">
                  <h1>How It Works</h1>
                  <ul>
                    <li>
                      <AiOutlineUserAdd size={22} />
                      <div className="text">
                        <h5>Create your account</h5>
                        <p>Create an account and login to get started</p>
                      </div>
                    </li>
                    <li>
                    <AiOutlineUserAdd size={22} />
                      <div className="text">
                      <h5>Create your account</h5>
                        <p>Create an account and login to get started</p>
                      </div>
                    </li>
                    <li>
                    <AiOutlineUserAdd size={22} />
                      <div className="text">
                      <h5>Create your account</h5>
                        <p>Create an account and login to get started</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sec-2">
                  <img src={require('../../assets/images/illustrtions/landing-2.png')} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
    
        <section className="waiting">
          <div className="con">
            <h1>What are you waiting for?</h1>
            <div className="btn-flex">
              <a href="/register" className="btn btn-white"
                >Get started here</a>
              <a href="/login" className="btn btn-secondary">Login</a>
            </div>
            <div className="checks">
              <div className="check">
                <BsCheck2Circle size={20}/>
                <span>Join live class sessions</span>
              </div>
              <div className="check">
                 <BsCheck2Circle size={20}/>
                <span>Access past exams and their solutions</span>
              </div>
              <div className="check">
                 <BsCheck2Circle size={20}/>
                <span>Access recorded versions of class sessions</span>
              </div>
            </div>
          </div>
        </section>
    
        <section className="footer">
          <div className="con">
            <p>© 2023 237 Virtual Academy. All rights reserved</p>
            <div className="social">
              <ul>
                <li>
                  <a href=""><CiFacebook size={20} color="#fff"/></a>
                </li>
                <li>
                 <a href=""><CiFacebook size={20} color="#fff"/></a>
                </li>
                <li>
                 <a href=""><CiFacebook size={20} color="#fff"/></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
}

export default index;
