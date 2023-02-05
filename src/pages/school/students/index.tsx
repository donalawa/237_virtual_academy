import React, { useState, useEffect }  from 'react';
import './students.css';

import StudentLayout from '../../../components/StudentLayout/StudentLayout';

import { EditCourseContentModal, DeleteModal  } from '../../../components';
import UploadAssessmentSolutionModal from '../../../components/students/UploadAssessmentSolutionModal/UploadAssessmentSolution';
import {  BsPencilSquare } from 'react-icons/bs';

import { IoMdCloudDownload } from 'react-icons/io';
import { AiFillEye } from 'react-icons/ai';

import { toast } from 'react-toastify';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { deletePassExamContent } from '../../../services/passExams';
import { getStudentSolutions, getStudentsClasses } from '../../../services/student';

import BeatLoader from "react-spinners/BeatLoader";

import moment from 'moment';
import { getTotalAssessments } from '../../../services/assessment';
import { VideoPlayerModal } from '../../../components';
import { convertDate } from '../../../utils/date';
import SchoolLayout from '../../../components/SchoolLayout/SchoolLayout';

const rows: any = [
    {
        label: '#',
        name: 'num'
    },
    {
        label: 'Class',
        name: 'name'
    },
    {
        label: 'Name',
        name: 'name'
    },
    {
        label: 'Teacher',
        name: 'name'
    },
    {
        label: 'Solution File',
        name: 'name'
    },
    {
        label: 'Question File',
        name: 'name'
    },
    {
        label: 'Created Date',
        name: 'name'
    },
    {
        label: 'Sumission Deadline',
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
    const [ showAddModal, setShoowAddModal ] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false); 
    const [deleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [assessments, setAssessments] = useState([]);
    const [showVideoModal, setShowVideoModal] = useState(false);

    const [editData, setEditData] = useState(null);

    const [videoUrl, setVideoUrl] = useState('');

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggleAddModal = () => {
        setShoowAddModal(!showAddModal);
    }

    const handleGetClasses = ()  => {


        getStudentsClasses().then((res: any) => {
            if(res.ok) {
                setClasses(res.data.data);
            }
        }).catch(err => {
            console.log('error: ', err);
        })
    }

    const toggleVideoModal = () => {
        setShowVideoModal(!showVideoModal);
    }

    const handleSetVideoUrl = (url: any) =>  {
        setVideoUrl(url);
        toggleVideoModal();
    }  

    const handleContentAdded = ()  => {
        toggleAddModal();
    }


    const handleGetAssessments = (classId: any) => {
        setLoading(true);
        getTotalAssessments(classId).then((res: any) => {
            console.log("STUDENT assessments RES: ",res);
            setLoading(false);
            setAssessments(res.data.data);
        }).catch((err: any) => {
            console.log('Error: ', err);
            setLoading(false);
        })
    }

    const handleClassSelected = (value: any) => {
        try {
            console.log('CLASS ID:' , value)
            if(value == 'all') {
                setAssessments([]);
                return;
            }

            handleGetAssessments(value);
        } catch (error) {
            console.log('error: ', error)
        }
    }



    useEffect(() => {
        console.log('USER EFFECT RAN')
        handleGetClasses();
    },[]);

    return (
        <SchoolLayout title="Students" pageTitle="Students">
      <div className="section">
            <div className="parent-con">
                <div className="data-table">
                    <div className="top">
                        <div className="span">
                            <select name="" id="" onChange={(e: any) => handleClassSelected(e.target.value)} className="select-field school-student-select">
                                <option value="all">Select Speciality</option>
                                {classes.map((classData: any, index: any) => <option key={index} value={classData.class_id._id}>{classData.class_id.name}</option>)}
                            </select>
                        </div>
                
                        {/* <button onClick={toggleAddModal} className="btn btn-primary btn-add student-button"> Upload Solution <i className="fas fa-plus"></i></button> */}
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
                                {assessments?.map((data: any, index: any) => <tr>
                                    <td className="flex-center">{index + 1}</td>
                                    <td className="flex-start">
                                        <p>{data?.class_room_id?.name}</p>
                                    </td>
                                    <td className="flex-start">
                                      {data?.title}
                                    </td>
                                    <td className="flex-start">
                                      {data?.teacher_id?.username}
                                    </td>
                    
                                  {data?.answers_file.length > 2 &&  <td className="flex-start"><a>Available</a></td>}

                                  {data?.answers_file.length < 2 &&  <td className="flex-start"><a>Not Available</a></td>}
                                    
                                    <td className="flex-start"><a href={data?.assessment_file} target="_blank" download>Questions</a></td>
                                
                                    <td className="flex-start">
                                        <p>{convertDate(data?.createdAt)}</p>
                                    </td>

                                     
                                    <td className="flex-start">
                                        <p>{data?.publish_answers_date}</p>
                                    </td>

                                    <td className="flex-center">
                                        <div className="action">
                                       {data?.answers_file.length > 2 && <>{data?.answers_file_type == 'video' && <Tippy content="View Video Solution"  animation="fade">
                                            <a onClick={() => {
                                                handleSetVideoUrl(data.answers_file)
                                            }} className="see"><AiFillEye onClick={() => null} size={14}/></a>
                                            </Tippy>}
                                          {data?.answers_file_type == 'others' &&  <Tippy content="Download Solution File"  animation="fade">
                                            <a target="_blank" download href={data.answers_file} className="see"><IoMdCloudDownload onClick={() => null} size={14}/></a>
                                            </Tippy>}</>}
                                            {data?.assessment_file?.length > 2 &&  <Tippy content="Download Assessment File"  animation="fade">
                                            <a href={data?.assessment_file} target="_blank" download className="see orange"><IoMdCloudDownload onClick={() => null} size={14}/></a>
                                            </Tippy>}
                                        </div>
                                    </td>
                                </tr> )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>

        {showAddModal &&  <UploadAssessmentSolutionModal onContentAdded={handleContentAdded} onClose={toggleAddModal} />}
        {showVideoModal && <VideoPlayerModal video={videoUrl} onClose={toggleVideoModal}/>}
        </SchoolLayout>
    );
}

export default Index;