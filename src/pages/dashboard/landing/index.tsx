import React,{ useEffect, useState } from 'react';
import Layout from '../../../components/Layout/Layout';

import { getClasses } from '../../../services/classroom';
import { getCourseContents } from '../../../services/courseContent';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { AiOutlineCopy } from 'react-icons/ai';

import BeatLoader from "react-spinners/BeatLoader";

import moment from 'moment';


const rows: any = [
    {
        label: '#',
        name: 'num'
    },
    {
        label: 'Student',
        name: 'name'
    },
    {
        label: 'Class Name',
        name: 'name'
    },
    {
        label: 'Status',
        name: 'name'
    },
    {
        label: 'Submited Date',
        name: 'name'
    },
    {
        label: 'Action',
        name: 'name'
    },
]

const override = {
    marginTop: '20px'
};


function Index() {
    const [classes, setClasses] = useState([]);
    const [courseContents, setCourseContents] = useState([]);
    const [loading, setLoading] = useState(false);

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
                <br />
                <br />
                <div className="section">
                        <div className="parent-con">
                <div className="data-table">
                                <div className="top">
                                    <div className="span">
                                        <h1>Students Applications</h1>
                                    </div>
                            
                                </div>
                                <div className="table-con">
                                <div style={{textAlign: 'center',}}>
                                    <BeatLoader
                                            color="#623d91" 
                                            loading={loading}
                                            cssOverride={override}
                                    />
                                </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                {rows.map((row: any, index: any) => <th key={index} className={row.name}>{row.label}</th>)}
                                                
                                            </tr>
                                        </thead>
                                 
                                        <tbody>
                                          {classes.map((data: any, index: any) => <tr>
                                                <td className="flex-center">{index + 1}</td>
                                                <td className="flex-start">
                                                    <p>{data.name}</p>
                                                </td>
                                       
                                
                                                <td className="flex-start">{data._id}</td>
                                                
                                                <td className="flex-start">{data._id}</td>
                                                
                                                <td className="flex-start">
                                                    <p>{moment(new Date(data.createdAt)).format('MMMM d, YYYY')}</p>
                                                </td>

                                                <td className="flex-center">
                                                    <div className="action">
                                                        <Tippy content="Accept"  animation="fade">
                                                        <a className="see"><AiOutlineCopy onClick={() => null} size={14}/></a>
                                                        </Tippy>
                                                        <Tippy content="Reject"  animation="fade">
                                                            <a onClick={() => null} className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
                                                        </Tippy>
                                                    </div>
                                                </td>
                                            </tr> )}
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                        
            </div>
        </Layout>
    );
}

export default Index;