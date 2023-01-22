import React, { useState } from 'react';
import './Layout.css';
import { removeToken } from '../../utils/storage';
import { useNavigate, NavLink } from "react-router-dom";


function Layout({ title, children } : any) {
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
                    <NavLink className="link" to="/dashboard">
                    <i className="fa fa-file" aria-hidden="true"></i>
                        <span>Dashboard</span>
                    </NavLink>

                    
            
                    <NavLink className="link" to="/class-rooms">
                    <i className="fa fa-file" aria-hidden="true"></i>
                        <span>Classrooms</span>
                    </NavLink>

                    <NavLink className="link" to="/course-contents">
                    <i className="fa fa-file" aria-hidden="true"></i>
                        <span>Course Content</span>
                    </NavLink>


                    <NavLink className="link" to="/assignments">
                    <i className="fa fa-file" aria-hidden="true"></i>
                        <span>Assignments</span>
                    </NavLink>

                    <NavLink className="link" to="/assessments">
                    <i className="fa fa-file" aria-hidden="true"></i>
                        <span>Assessment</span>
                    </NavLink>
                    
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
            
            <div className="content">
                    <div className="con">
                        <div className="page-title">
                            <p>{title}</p>
                            <div className="crumb">
                                <NavLink to="/dashboard" className="crumb-item">Dashboard</NavLink>
                                <span>{'>'}</span>
                                <a className="crumb-item">Home</a>
                            </div>
                        </div>

                        <div className="section">
                            { children }
                        </div>

                    </div>
                </div>

            <footer className={`${!showNav ? 'expand' : ''}`}>
                <div className="con">
                    <p>Copyright &copy; 2023 <a href="../index.html">237 Virtual Academy</a> All rights reserved</p>
                    <p>Version 1.0</p>
                </div>
            </footer>
        </div>
    </div>
    );
}

export default Layout;