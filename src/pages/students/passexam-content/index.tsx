import React, { useState, useEffect }  from 'react';
import './passexam-content.css';

import StudentLayout from '../../../components/StudentLayout/StudentLayout';

import { EditCourseContentModal, DeleteModal  } from '../../../components';
import UploadAssessmentSolutionModal from '../../../components/students/UploadAssessmentSolutionModal/UploadAssessmentSolution';
import {  BsPencilSquare } from 'react-icons/bs';

import { IoMdCloudDownload } from 'react-icons/io';
import { AiFillEye } from 'react-icons/ai';

import { toast } from 'react-toastify';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { getStudentsClasses, studentGetPassExams } from '../../../services/student';

import BeatLoader from "react-spinners/BeatLoader";

import moment from 'moment';
import { getTotalAssessments, studentGetAssessments } from '../../../services/assessment';
import { VideoPlayerModal } from '../../../components';
import { getPassExamContents } from '../../../services/passExams';
import { convertDate } from '../../../utils/date';

const rows: any = [
    {
        label: '#',
        name: 'num'
    },
    {
        label: 'Title',
        name: 'name'
    },
    {
        label: 'Question File',
        name: 'name'
    },
    {
        label: 'Answer Pdf',
        name: 'name'
    },
    {
        label: 'Answer Video',
        name: 'name'
    },
    {
        label: 'Publish Date',
        name: 'name'
    },
    {
        label: 'Created Date',
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
    const [passexams, setPassExams] = useState([]);
    const [showVideoModal, setShowVideoModal] = useState(false);

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


    const handleGetPassExamContents = (classId: any) => {
        setLoading(true);
        studentGetPassExams(classId).then((res: any) => {
            console.log("PASS EXAMS RES: ",res);
            setLoading(false);
            setPassExams(res.data.data);
        }).catch((err: any) => {
            console.log('Error: ', err);
            setLoading(false);
        })
    }

    const handleClassSelected = (value: any) => {
        try {
            console.log('CLASS ID:' , value)
            if(value == 'all') {
                setPassExams([]);
                return;
            }

            handleGetPassExamContents(value);
        } catch (error) {
            console.log('error: ', error)
        }
    }


    useEffect(() => {
        console.log('USER EFFECT RAN')
        handleGetClasses();
    },[]);

    return (
        <StudentLayout title="Asssessment Submissions" pageTitle="Pass Exam">
      <div className="section">
            <div className="parent-con">
                <div className="data-table">
                    <div className="top">
                        <div className="span">
                            <select name="" id="" onChange={(e: any) => handleClassSelected(e.target.value)} className="select-field student-select">
                                <option value="all">Select Class</option>
                                {classes.map((classData: any, index: any) => <option key={index} value={classData?.class_id._id}>{classData?.class_id?.name}</option>)}
                            </select>
                        </div>
                        {/* <form className="search">
                            <input type="search" name="" id="" placeholder="Find ..." />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form> */}
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
                                {passexams?.map((data: any, index: any) => <tr>
                                    <td className="flex-center">{index + 1}</td>
                                    <td className="flex-start">
                                        <p>{data.title}</p>
                                    </td>
                            
                    
                                    <td className="flex-start"><a href={data?.questions_file} target="_blank" download>Question File</a></td>
                                    <td className="flex-start"><a>{data?.answers_file?.length > 2 ? 'Available' : "Not Available"}</a></td>
                                    <td className="flex-start"><a>{data?.video_solution_url?.length > 2 ? 'Available' : "Not Available"}</a></td>
                                    <td className="flex-start">{convertDate(data?.publish_date)}</td>
                                    
                                    <td className="flex-start">
                                        <p>{convertDate(data?.createdAt)}</p>
                                    </td>

                                    <td className="flex-center">
                                        <div className="action">
                                           {data?.video_solution_url&& <Tippy content="View Video Solution"  animation="fade">
                                            <a onClick={() => {
                                                handleSetVideoUrl(data?.video_solution_url)
                                            }} className="see"><AiFillEye onClick={() => null} size={14}/></a>
                                            </Tippy>}
                                          {data?.answers_file?.length > 2 &&  <Tippy content="Download File Solution"  animation="fade">
                                            <a href={data?.answers_file} target="_blank" download className="see"><IoMdCloudDownload onClick={() => null} size={14}/></a>
                                            </Tippy>}
                                            {data?.questions_file?.length > 2 &&  <Tippy content="Download Questions File"  animation="fade">
                                            <a href={data?.questions_file} target="_blank" download className="see orange"><IoMdCloudDownload onClick={() => null} size={14}/></a>
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
        </StudentLayout>
    );
}

export default Index;