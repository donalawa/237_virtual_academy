import React from 'react';
import './AuthLayout.css';


function AuthLayout({ title, children } : any) {
    return (
        <div>
            <div className="login-container">
            <div className="left">
                <div className="login-welcome-message">
                  <p>{title}</p>
                  <p>Nice to see you</p>
                  <img src={require('../../../../assets/images/auth/banner.png')} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="logo-box">
                     <img src={require('../../../../assets/images/logo/logo.png')} alt="" />
                </div>
                { children }
            </div>
        </div>
        </div>
    );
}

export default AuthLayout;
