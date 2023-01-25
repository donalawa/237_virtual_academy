import React,{ useEffect, useState } from 'react';
import Layout from '../../../components/Layout/Layout';

import { getClasses } from '../../../services/classroom';
import { getCourseContents } from '../../../services/courseContent';

function Index() {
    const [classes, setClasses] = useState([]);
    const [courseContents, setCourseContents] = useState([]);


    const handleGetClasses = ()  => {
        getClasses().then((res: any) => {
            if(res.ok) {
                setClasses(res?.data?.data)
            }
        })
    }

    const handleGetCourseContents = () => {
        getCourseContents().then((res: any) => {
            if(res.ok) {
                setCourseContents(res?.data?.data);
            }
        })
    }

    useEffect(() => {
        handleGetClasses();
        handleGetCourseContents();
    }, [])

    return (
        <Layout title="Dashboard">
            <div>
            <div className="flex-4">
                    <a href="" className="stat-card">
                        <div className="stat-name">Total Classrooms</div>
                        <div className="stat-value">{classes.length}</div>
                    </a>
                    <a href="" className="stat-card">
                        <div className="stat-name">Total Course Content</div>
                        <div className="stat-value">{courseContents.length}</div>
                    </a>
                    <a href="" className="stat-card">
                        <div className="stat-name">Total Live Sessions</div>
                        <div className="stat-value">0</div>
                    </a>
                    <a href="" className="stat-card">
                        <div className="stat-name">Total Assessments</div>
                        <div className="stat-value">0</div>
                    </a>
                </div>
            </div>
        </Layout>
    );
}

export default Index;