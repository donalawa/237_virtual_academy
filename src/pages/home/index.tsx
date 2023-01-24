import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import { BsCheck2Circle }  from 'react-icons/bs';
import './home.css';
import { Link } from "react-router-dom";
import { IoLanguageOutline } from 'react-icons/io5';

import { useTranslation } from 'react-i18next';

function Index() {
    const { t, i18n } = useTranslation();
    let [lang, setLang] = useState('en');

    const handleTrans = () => {
      i18n.changeLanguage(lang);
    };

    
    useEffect(() => {
      handleTrans();
    },[lang])
    return (
        <div className="landing-page">
          <p>.</p>
        <div className="page">
          <div className="hero">
            <div className="con">
              <div className="sec-1">
                <h5>{t('home_welcome')}</h5>
                <img
                  className="logo"
                  src={require('../../assets/images/logo/logo.png')}
                  alt=""
                />
                <h1>
                    {t('home_title')}
                </h1>
                <p className="home-desc">
                  {t('home_descriptioon')}
                </p>
                <div className="hero-btns">
                  <Link to="/register" className="btn btn-primary"
                    >{t('register_text')}</Link>
                  <Link to="/login" className="btn btn-secondary"
                    >{t('login_text')}</Link>
                
                </div>
              </div>
              <div className="sec-2">
                <img src={require('../../assets/images/illustrtions/landing-1.png')} alt="" />
              </div>
            </div>
            <select value={lang} onChange={(e: any) => setLang(e.target.value)} id="" className="language">
                  <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿 EN</option>
                  <option value="fr">🇫🇷 FR</option>
              </select>
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
              <Link to="/register"  className="btn btn-white"
                >Register here</Link>
              <Link to="/login" className="btn btn-secondary">Login</Link>
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

export default Index;
