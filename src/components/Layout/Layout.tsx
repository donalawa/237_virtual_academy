import React, { useState, useEffect } from 'react';
import './Layout.css';
import { isStudent, removeToken } from '../../utils/storage';
import { useNavigate, NavLink } from "react-router-dom";
import {SiGoogleclassroom} from 'react-icons/si';
import { MdOutlineContentPaste, MdAssignmentLate, MdAssessment, MdDashboard } from 'react-icons/md';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { useTranslation } from 'react-i18next';
import { Navigate } from "react-router";

import { getUser, isTeacher } from '../../utils/storage';

function Layout({ title, children, pageTitle = '' } : any) {
    const { t, i18n } = useTranslation();
    let [lang, setLang] = useState<any>(null);

    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);

    const [showNav, setShowNav] = useState(true);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleLogout = () => {
        removeToken();
        navigate('/');
    }

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    const handleTrans = () => {
        i18n.changeLanguage(lang);
      };
  
      const handleLangInit = () => {
        let lng = localStorage.getItem('locale');
        // console.log("locale", lng);
        if(lng == null) {
          localStorage.setItem('locale', 'fr')
          setLang('fr');
        }else {
          setLang(lng);
        }
      }
  
      const changeLang = () => {
        if(lang != null) {
          localStorage.setItem('locale', lang)
          handleTrans();
        }
      }
      
      useEffect(() => {
        handleLangInit();
      },[])
  
      useEffect(() => {
        changeLang()
      }, [lang]);

    useEffect(() => {
        let usr = getUser();
        setUser(usr);
    }, [])

        
    if(isStudent()) {
        // console.log('STUDENT');
        return <Navigate to="/students/home" replace/>
    }

    if(!isTeacher()) {
        // console.log('TEACHER');
        return <Navigate to="/" replace/>
    }

    return (
        <div className="dashboard-grid">
        <div className={`sidebar ${!showNav ? 'show' : ''}`}>
            <div className="logo" style={{cursor: 'pointer'}}>
                <a onClick={() => navigate('/')}><img src={require('../../assets/images/logo/logo-light.png')} alt=" " /></a>
            </div>
            <div className="menu">
                <div className="sub-menu">
                    <div className="title">MAIN NAVIGATION</div>
                    <NavLink className="link" to="/dashboard">
                    <i><MdDashboard size={20}/></i>
                        <span>Dashboard</span>
                    </NavLink>

                    
            
                    <NavLink className="link" to="/class-rooms">
                    <i><SiGoogleclassroom size={20}/></i>
                        <span>Classrooms</span>
                    </NavLink>

                    <NavLink className="link" to="/course-contents">
                    <i><MdOutlineContentPaste size={20}/></i>
                        <span>Course Content</span>
                    </NavLink>


                    <NavLink className="link" to="/follow-up">
                    <i><MdAssignmentLate size={20}/></i>
                        <span>Follow-up</span>
                    </NavLink>

                    <NavLink className="link" to="/assessments">
                    <i><MdAssessment size={20}/></i>
                        <span>Assessment</span>
                    </NavLink>

                    <NavLink className="link" to="/assessment-submissions">
                    <i><MdAssessment size={20}/></i>
                        <span>Assessment Submissions</span>
                    </NavLink>

                    <NavLink className="link" to="/pass-exams">
                    <i><MdAssessment size={20}/></i>
                        <span>Pass Exams</span>
                    </NavLink>

                    <NavLink className="link" to="/live-session">
                    <i><GoDeviceCameraVideo size={20}/></i>
                        <span>Live Sessions</span>
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
                        <select value={lang} onChange={(e: any) => setLang(e.target.value)} id="" className="language-dashboard">
                            <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿 EN</option>
                            <option value="fr">🇫🇷 FR</option>
                        </select>
                        <div className="divider"></div>
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
                    <p>{user?.username}</p>
                    <span>Teacher</span>
                </div>
                <div className="user-menu-footer">
                    <a><i className="fas fa-cog"></i> Settings</a>
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
                                <a className="crumb-item">{ pageTitle }</a>
                            </div>
                        </div>

                        <div className="section">
                            { children }
                        </div>

                    </div>
                </div>

            <footer className={`${!showNav ? 'expand' : ''}`}>
                <div className="con">
                    <p>{t('copywright_text')}</p>
                    <p>Version 1.0</p>
                </div>
            </footer>
        </div>
    </div>
    );
}

export default Layout;