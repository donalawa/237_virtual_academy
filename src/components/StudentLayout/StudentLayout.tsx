import React, { useState, useEffect, useContext } from 'react';
import './StudentLayout.css';
import { getAcademicYear, removeToken, storeAcademicYear } from '../../utils/storage';
import { useNavigate, NavLink } from "react-router-dom";
import {SiGoogleclassroom} from 'react-icons/si';
import { MdContentPaste, MdAssignmentTurnedIn,MdReportProblem, MdAssignmentLate, MdAssessment, MdDashboard } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { FaPeopleArrows,FaSchool } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { TfiAnnouncement } from 'react-icons/tfi';
import { useTranslation } from 'react-i18next';
import { GoDeviceCameraVideo } from 'react-icons/go';
import AcademicYearContext from '../../contexts/AcademicYearContext';
import { BsBank2 } from 'react-icons/bs';

import { getUser } from '../../utils/storage';
import { studentGetAcademicYears } from '../../services/student';

function StudentLayout({ title, children, pageTitle } : any) {
    const { t, i18n } = useTranslation();
    let [lang, setLang] = useState<any>(null);

    const [academicYears, setAcademicYears] = useState([]);
    const {activeAcademyYear, setActiveAcademyYear} = useContext<any>(AcademicYearContext);


    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);

    const [showStudNav,setShowStudNav] = useState(true);
    const [showUserMenu, setShowUserMenu] = useState(false);


    const handleGetAcademicYears = () => {
        studentGetAcademicYears().then((res: any) => {
            if(res.ok) {
                if(!getAcademicYear()) {
                    setActiveAcademyYear(res?.data?.data[0]._id);
                    storeAcademicYear(res?.data?.data[0]._id);
                }else {
                    setActiveAcademyYear(getAcademicYear())
                }
                setAcademicYears(res?.data?.data);
            }
        })
    }

    const handleAccademicYearChange = (e: any) => {
        setActiveAcademyYear(e.target.value);
        storeAcademicYear(e.target.value);

    }


    const handleLogout = () => {
        removeToken();
        navigate('/');
    }

    const toggleNav = () => {
        console.log('toggle nav')
        setShowStudNav(!showStudNav);
    }

    const handleTrans = () => {
        i18n.changeLanguage(lang);
      };
  
      const handleLangInit = () => {
        let lng = localStorage.getItem('locale');
        console.log("locale", lng);
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
        console.log("USER", getUser());
        let usr = getUser();
        setUser(usr);
    }, [])


    useEffect(() => {
        handleGetAcademicYears();
    },[])


    return (
        <div className="dashboard-grid">
        <div className={`sidebar-student student student-dashboard-sidebar  ${!showStudNav ? 'show' : ''}`}>
            <div className="logo" style={{cursor: 'pointer'}}>
                <a onClick={() => navigate('/')}><img src={require('../../assets/images/logo/logo-light.png')} alt=" " /></a>
            </div>
            <div className="menu">
                <div className="sub-menu">
                    <div className="title">MAIN NAVIGATION</div>
                    <NavLink className="link" to="/students/home">
                    <i><MdDashboard size={20}/></i>
                        <span>Dashboard</span>
                    </NavLink>


                    <NavLink className="link" to="/students/course-contents">
                    <i><MdContentPaste size={20}/></i>
                        <span>Course Content</span>
                    </NavLink>

                    <NavLink className="link" to="/students/followups">
                    <i><MdAssignmentLate size={20}/></i>
                        <span>Follow Ups</span>
                    </NavLink>

                    <NavLink className="link" to="/students/assignments">
                    <i><MdAssignmentLate size={20}/></i>
                        <span>Assignments</span>
                    </NavLink>

                    <NavLink className="link" to="/students/assignment-submissions">
                    <i><MdAssignmentTurnedIn size={20}/></i>
                        <span>Assignment Submissions</span>
                    </NavLink>

                    <NavLink className="link" to="/students/assessments">
                    <i><MdAssessment size={20}/></i>
                        <span>Assessments</span>
                    </NavLink>

                    <NavLink className="link" to="/students/assessment-submissions">
                    <i><MdAssessment size={20}/></i>
                        <span>Assessment Submissions</span>
                    </NavLink>

                    <NavLink className="link" to="/students/passexams">
                    <i><MdAssessment size={20}/></i>
                        <span>Pass Exams</span>
                    </NavLink>


                    <NavLink className="link" to="/students/results">
                    <i><FaSchool size={20}/></i>
                        <span>School Results</span>
                    </NavLink>
                    
                    <NavLink className="link" to="/students/live-session">
                    <i><GoDeviceCameraVideo size={20}/></i>
                        <span>Join Live Session</span>
                    </NavLink>


                    <NavLink className="link" to="/students/time-table">
                    <i><SlCalender size={20}/></i>
                        <span>Time Table</span>
                    </NavLink>


                    <NavLink className="link" to="/students/announcements">
                    <i><TfiAnnouncement size={20}/></i>
                        <span>Anouncements</span>
                    </NavLink>
                    
                    <NavLink className="link" to="/students/peers">
                    <i><FaPeopleArrows size={20}/></i>
                        <span>Peers</span>
                    </NavLink>

                    {/* <NavLink className="link" to="/students/todos">
                    <i><BsFillCalendar2CheckFill size={20}/></i>
                        <span>Personal Todos</span>
                    </NavLink> */}


                    <NavLink className="link" to="/students/report">
                    <i><MdReportProblem size={20}/></i>
                        <span>Submit Report</span>
                    </NavLink>

                    <NavLink className="link" to="/students/fees-payment">
                    <i><GiMoneyStack size={20}/></i>
                        <span>Fees Payment</span>
                    </NavLink>
                    
                    
                    <NavLink className="link" to="/students/school-banks">
                    <i><BsBank2 size={20}/></i>
                        <span>School Banks</span>
                    </NavLink>

                
                </div>
    
            </div>
        </div>
        <div className={`main ${!showStudNav ? 'expand' : ''}`}>
            <header className={`${!showStudNav ? 'expand' : ''}`}>
                <div className="con">
                    <div className="nav-toggler-btn" onClick={toggleNav}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    
                    <span>
                    <select onChange={handleAccademicYearChange} value={activeAcademyYear} id="" className="language-dashboard">
                           {academicYears.map((acca: any) => <option value={acca._id}>{acca?.title}</option> )}
                           <option value='hghhfhffgggdgd'>Test</option>
                    </select>
                    <div className="divider"></div>
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
                            <div className="name">Hello</div>
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
                    <span>Student</span>
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
                                <NavLink to="/" className="crumb-item">Students</NavLink>
                                <span>{'>'}</span>
                                <a className="crumb-item">{pageTitle}</a>
                            </div>
                        </div>

                        <div className="section">
                            { children }
                        </div>

                    </div>
                </div>

            <footer className={`${!showStudNav ? 'expand' : ''}`}>
                <div className="con">
                    <p>{t('copywright_text')}</p>
                    <p>Version 1.0</p>
                </div>
            </footer>
        </div>
    </div>
    );
}

export default StudentLayout;