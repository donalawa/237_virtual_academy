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
                                <a className="crumb-item">Home</a>
                            </div>
                        </div>

                        <div className="section">
                            <div className="flex-4">
                                <a href="" className="stat-card">
                                    <div className="stat-name">Total Classrooms</div>
                                    <div className="stat-value">0</div>
                                </a>
                                <a href="" className="stat-card">
                                    <div className="stat-name">Total Course Content</div>
                                    <div className="stat-value">0</div>
                                </a>
                                <a href="" className="stat-card">
                                    <div className="stat-name">Total Live Sessions</div>
                                    <div className="stat-value">0</div>
                                </a>
                                <a href="" className="stat-card">
                                    <div className="stat-name">Total Questions</div>
                                    <div className="stat-value">0</div>
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