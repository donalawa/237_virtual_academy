import React, { useState } from 'react';
import './Layout.css';
import { removeToken } from '../../utils/storage';
import { useNavigate } from "react-router-dom";


function Layout({ children } : any) {
    const navigate = useNavigate();
    
    const [showNav, setShowNav] = useState(true);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleLogout = () => {
        removeToken();
        navigate('/');
    }

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <div className="dashboard-grid">
        <div className={`sidebar ${!showNav ? 'show' : ''}`}>
            <div className="logo">
                <a href="index.html"><img src={require('../../assets/images/logo/logo-light.png')} alt=" " /></a>
            </div>
            <div className="menu">
                <div className="sub-menu">
                    <div className="title">MAIN NAVIGATION</div>
                    <a className="link active" href="create-post.html">
                    <i className="fa fa-file" aria-hidden="true"></i>
                        <span>Manage Classrooms</span>
                    </a>
            
                    <a className="link" href="">
                    <i className="fa fa-file" aria-hidden="true"></i>
                        <span>Course Content</span>
                    </a>

                    <a className="link" href="">
                    <i className="fa fa-file" aria-hidden="true"></i>
                        <span>Assignments</span>
                    </a>

                    <a className="link" href="">
                    <i className="fa fa-file" aria-hidden="true"></i>
                        <span>Assessment</span>
                    </a>
                    
                </div>
                <div className="sub-menu">
                    <div className="title">LABELS</div>
                    <a className="link label" href="">
                        <i className="fa fa-file" aria-hidden="true"></i>
                        {/* <img src="./assets/images/icons/label.svg" alt=""> */}
                        <span>Admin</span>
                    </a>
                </div>
            </div>
        </div>
        <div className={`main ${!showNav ? 'expand' : ''}`}>
            <header className={`${!showNav ? 'expand' : ''}`}>
                <div className="con">
                    <div className="nav-toggler-btn" onClick={toggleNav}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <span>
                        <a href="" className="link notify">
                            <i className="fa fa-bell" aria-hidden="true"></i>
                        </a>
                        <div className="divider"></div>
                        <div className="profile-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
                            <div className="name">Hello Admin</div>
                            {/* <img src="./assets/images/users/user-1.png" alt=""> */}
                        </div>
                    </span>
                </div>
            </header>
            <div className={`user-menu ${showUserMenu ? 'show' : ''}`}>
                <div className="user-menu-top">
                    <i className="fa fa-times" onClick={() => setShowUserMenu(!showUserMenu)}></i>
                    <img src={require("../../assets/images/users/avatar.jpg")} alt="" />
                    <p>Fon Noel Nfebe</p>
                    <span>Admin User</span>
                </div>
                <div className="user-menu-footer">
                    <a href="../404.html"><i className="fas fa-cog"></i> Settings</a>
                    <a onClick={handleLogout} className="logout-link"><i className="fas fa-door-open"></i> Logout</a>
                </div>
            </div>
            { children }
            <footer className={`${!showNav ? 'expand' : ''}`}>
                <div className="con">
                    <p>Copyright &copy; 2017 <a href="../index.html">ProbeWrite</a> All rights reserved</p>
                    <p>Version 2.5</p>
                </div>
            </footer>
        </div>
    </div>
    );
}

export default Layout;