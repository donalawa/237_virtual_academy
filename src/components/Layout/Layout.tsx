import React from 'react';
import './Layout.css';

function Layout({ children } : any) {
    return (
        <div className="dashboard-grid">
        <div className="sidebar">
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
            
                    <div className="link-con">
                        <label className="link">
                            <span>
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span>Users</span>
                            </span>
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </label>
                        <input type="checkbox" name="menu-1" id="menu-1" />
                        <div className="link-sub">
                            <a className="link" href="">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span>User</span>
                            </a>
                            <a className="link" href="">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span>User</span>
                            </a>
                            <a className="link" href="">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span>User</span>
                            </a>
                        </div>
                    </div>
                    <a className="link" href="">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>Mail</span>
                    </a>
                </div>
                <div className="sub-menu">
                    <div className="title">LABELS</div>
                    <a className="link label" href="">
                        {/* <img src="./assets/images/icons/label.svg" alt=""> */}
                        <span>Admin</span>
                    </a>
                    <a className="link label" href="">
                        {/* <img src="./assets/images/icons/label.svg" alt=""> */}
                        <span>Editor</span>
                    </a>
                    <a className="link label" href="">
                        {/* <img src="./assets/images/icons/label.svg" alt=""> */}
                        <span>Publisher</span>
                    </a>
                    <a className="link label" href="">
                        {/* <img src="./assets/images/icons/label.svg" alt=""> */}
                        <span>Author</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="main">
            <header>
                <div className="con">
                    <div className="nav-toggler-btn">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <span>
                        <form action="" className="search">
                            <input type="search" name="" id="" placeholder="Find ..." />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                        <div className="search-btn">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <a href="" className="link notify">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                        <a href="" className="link notify">
                            <i className="fa fa-bell" aria-hidden="true"></i>
                        </a>
                        <div className="divider"></div>
                        <div className="profile-btn">
                            <div className="name">Fon Noel Nfebe</div>
                            {/* <img src="./assets/images/users/user-1.png" alt=""> */}
                        </div>
                    </span>
                </div>
            </header>
            <div className="user-menu">
                <div className="user-menu-top">
                    <i className="fa fa-times"></i>
                    {/* <img src="./assets/images/users/user-1.png" alt=""> */}
                    <p>Fon Noel Nfebe</p>
                    <span>Admin User</span>
                </div>
                <div className="user-menu-footer">
                    <a href="../404.html"><i className="fas fa-cog"></i> Settings</a>
                    <a href=""><i className="fas fa-door-open"></i> Logout</a>
                </div>
            </div>
            { children }
            <footer>
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