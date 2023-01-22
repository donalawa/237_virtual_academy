import React from 'react';
import Layout from '../../../components/Layout/Layout';

function index() {
    return (
        <Layout>
            <div>
                <div className="content">
                    <div className="con">
                        <div className="page-title">
                            <p>Dashboard</p>
                            <div className="crumb">
                                <a href="index.html" className="crumb-item">Dashboard</a>
                                <span></span>
                                <a href="" className="crumb-item">Home</a>
                            </div>
                        </div>

                        <div className="section">
                            <div className="flex-4">
                                <a href="" className="stat-card">
                                    <div className="stat-name">Total of Posts</div>
                                    <div className="stat-value">60</div>
                                </a>
                                <a href="" className="stat-card">
                                    <div className="stat-name">Pages</div>
                                    <div className="stat-value">16</div>
                                </a>
                                <a href="" className="stat-card">
                                    <div className="stat-name">Users</div>
                                    <div className="stat-value">43</div>
                                </a>
                                <a href="" className="stat-card">
                                    <div className="stat-name">Mail</div>
                                    <div className="stat-value">64</div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default index;