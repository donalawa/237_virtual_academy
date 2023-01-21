import React from 'react';
import './login.css';
import { FaUserAlt } from 'react-icons/fa';

function index() {
    return (
        <div className="login-container">
            <div className="left">
                <div className="login-welcome-message">
                  <p>Welcome Back</p>
                  <p>Nice to see you</p>
                </div>
            </div>
            <div className="right">
                <div className="logo-box">
                     <img src={require('../../assets/images/logo/logo.png')} alt="" />
                </div>
                <form action="" className="auth-form">
                    <p>Login</p>

                  <div className="input-with-icon-form-group u-margin-bottom-small">
                    <i className="fas fa-user text-primary"></i>
                    <input type="text" placeholder="Username" />
                  </div>

                  <div className="input-with-icon-form-group">
                    <i className="fas fa-lock text-primary"></i>
                    <input type="password" placeholder="Password" />
                  </div>

                  <div className="remember-me-checkbox u-margin-top-extra-small u-margin-bottom-small">
                    <input type="checkbox" name="" id="" />
                    <span>Remember me</span>
                  </div>
                  
                  <input type="submit" value="Login" className="u-margin-bottom-small" />
                </form>
            </div>
        </div>
    );
}

export default index;