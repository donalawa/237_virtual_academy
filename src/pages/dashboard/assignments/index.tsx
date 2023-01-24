import React, { useState, useEffect }  from 'react';
import './assignment.css';

import Layout from '../../../components/Layout/Layout';

import { AddCourseContentModal, EditCourseContentModal, DeleteModal } from '../../../components';

import { AiFillEye } from 'react-icons/ai';
import {  BsPencilSquare } from 'react-icons/bs';
import { IoMdCloudDownload } from 'react-icons/io';

import { toast } from 'react-toastify';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { getClasses, deleteClass } from '../../../services/classroom';
import { deleteCourseContent, getCourseContents, getClassCourseContents } from '../../../services/courseContent';

import BeatLoader from "react-spinners/BeatLoader";

import moment from 'moment';

const rows: any = [
    {
        label: '#',
        name: 'num'
    },
    {
        label: 'Student Name',
        name: 'name'
    },
    {
        label: 'Comment',
        name: 'name'
    },
    {
        label: 'Submitted Date',
        name: 'name'
    },
    {
        label: 'Action',
        name: 'action'
    }
]


const override = {
    marginTop: '20px'
  };



function Index() {
    const [ showAddModal, setShoowAddModal ] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false); 
    const [deleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [classes, setClasses] = useState([]);
    const [contents, setContents] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [seletedClass, setSelectedClass] = useState('all');
    const [seletedContent, setSelectedContent] = useState('all');
    const [loading, setLoading] = useState(false);

    const toggleDeleteModal = () => {
        setShowDeleteModal(!deleteModal);
    }

    const handleGetClasses = ()  => {

        getClasses().then((res: any) => {
            if(res.ok) {
                setClasses(res.data.data);
            }
        }).catch(err => {
            console.log('error: ', err);
        })
    }

    const handleDeleteCourseContent = () => {
        console.log('DELETE COURSE CONTENT');
        console.log(deleteId)
        deleteCourseContent(deleteId).then((res: any) => {
            if(res.ok) {
                toggleDeleteModal();
                handleGetClasses();
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
          
            }else {
                toast.error(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })
    }


    const handleGetContent = (classId: any) => {
        // setLoading(true);
        if(classId == 'all') {
            setSelectedClass('all');
            setContents([]);
            return;
        }
        setSelectedClass(classId)

        getClassCourseContents(classId).then((res: any) => {
            console.log("CLASSS COURSE CONTENT RES: ",res);
            // setLoading(false);
            setContents(res.data.data);
        }).catch((err: any) => {
            console.log('Error: ', err);
            // setLoading(false);
        })
    }

    const handleGetAssignmentSubs = (contentId: any) => {
        console.log('GET SUBS');
        console.log('CONTENT ID: ', contentId)

        if(contentId == 'all') {
            setSelectedContent('all');
            return;
        }
        setSelectedContent(contentId);
    }

    useEffect(() => {
        console.log('USER EFFECT RAN')
        handleGetClasses();
    },[]);

    return (
        <Layout title="Assignment Submissions">
      <div className="section">
            <div className="parent-con">
                <div className="data-table">
                    <div className="top">
                        <div className="span">
                            <select value={seletedClass} onChange={(e: any) => handleGetContent(e.target.value)} className="select-field">
                                <option  value="all">Select Class</option>
                                {classes.map((classData: any, index: any) => <option key={index} value={classData._id}>{classData.name}</option>)}
                            </select>
                            <select value={seletedContent} onChange={(e: any) => handleGetAssignmentSubs(e.target.value)}  className="select-field">
                                <option value="all">Select Course Content</option>
                                {contents.map((contentData: any, index: any) => <option key={index} value={contentData._id}>{contentData.title}</option>)}
                            </select>
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
                                {solutions?.map((data: any, index: any) => <tr>
                                    <td className="flex-center">{index + 1}</td>
                                    <td className="flex-start">
                                        <p>{data.title}</p>
                                    </td>
                            
                    
                                    <td className="flex-start">{data?.description}</td>
                                    <td className="flex-start">{data?.expectation}</td>
                                    <td className="flex-start">{data?.classroom_id?.name}</td>
                                    <td className="flex-start">{moment(new Date(data?.publish_date)).format('MMMM d, YYYY')}</td>
                                    
                                    <td className="flex-start">
                                        <p>{moment(new Date(data?.createdAt)).format('MMMM d, YYYY')}</p>
                                    </td>

                                    <td className="flex-center">
                                        <div className="action">
                                            <Tippy content="Download  Submissions"  animation="fade">
                                            <a onClick={() => null} className="see"><IoMdCloudDownload onClick={() => null} size={16}/></a>
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

        {deleteModal && <DeleteModal onAccept={handleDeleteCourseContent} onCancel={toggleDeleteModal} />}
        </Layout>
    );
}

export default Index;