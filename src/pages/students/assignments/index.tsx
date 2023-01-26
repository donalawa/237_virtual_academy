import React, { useState, useEffect }  from 'react';
import './assignments.css';

import StudentLayout from '../../../components/StudentLayout/StudentLayout';

import { AssessmentModal, EditCourseContentModal, DeleteModal, PassExammodal  } from '../../../components';
import UploadAssignmentSolutionModal from '../../../components/students/UploadAssignmentSolutionModal/UploadAssignmentSolutionModal';
import { IoMdCloudDownload } from 'react-icons/io';
import {  BsPencilSquare } from 'react-icons/bs';

import { toast } from 'react-toastify';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { getClasses, deleteClass } from '../../../services/classroom';
import { getPassExamContents, deletePassExamContent } from '../../../services/passExams';
import { getCourseContent } from '../../../services/student';

import BeatLoader from "react-spinners/BeatLoader";

import moment from 'moment';

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
    const [showEditModal, setShowEditModal] = useState(false); 
    const [deleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [contents, setContents] = useState([]);

    const [editData, setEditData] = useState(null);

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggleAddModal = () => {
        setShoowAddModal(!showAddModal);
    }

    const toggleEditModal = () => {
        setShowEditModal(!showEditModal);
    }

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

    const handleDeleteCourseExamContent = () => {
        console.log('DELETE COURSE CONTENT');
        console.log(deleteId)
        deletePassExamContent(deleteId).then((res: any) => {
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

    const handleContentAdded = ()  => {
        handleGetContent();
        toggleAddModal();
    }


    const handleGetContent = () => {
        setLoading(true);
        getPassExamContents().then((res: any) => {
            console.log("PASSS EXAM CONTENT RES: ",res);
            setLoading(false);
            setContents(res.data.data);
        }).catch((err: any) => {
            console.log('Error: ', err);
            setLoading(false);
        })
    }

    useEffect(() => {
        console.log('USER EFFECT RAN')
        handleGetContent();
        handleGetClasses();
    },[]);

    return (
        <StudentLayout title="Assignments">
      <div className="section">
            <div className="parent-con">
                <div className="data-table">
                    <div className="top">
                        <div className="span">
                            <select name="" id="" className="select-field student-select">
                                <option value="all">All</option>
                                {classes.map((classData: any, index: any) => <option key={index} value={classData.class_id._id}>{classData.class_id.name}</option>)}
                            </select>
                        </div>
                        {/* <form className="search">
                            <input type="search" name="" id="" placeholder="Find ..." />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form> */}
                        <button onClick={toggleAddModal} className="btn btn-primary btn-add student-button"> Upload Solution <i className="fas fa-plus"></i></button>
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
                                {contents?.map((data: any, index: any) => <tr>
                                    <td className="flex-center">{index + 1}</td>
                                    <td className="flex-start">
                                        <p>{data.title}</p>
                                    </td>
                            
                    
                                    <td className="flex-start"><a href={data?.questions_file} target="_blank" download>Question File</a></td>
                                    <td className="flex-start"><a href={data?.answers_file} target="_blank" download>Answers File</a></td>
                                    <td className="flex-start"><a href={data?.video_solution_url} target="_blank" download>Video File</a></td>
                                    <td className="flex-start">{moment(new Date(data?.publish_date)).format('MMMM d, YYYY')}</td>
                                    
                                    <td className="flex-start">
                                        <p>{moment(new Date(data?.createdAt)).format('MMMM d, YYYY')}</p>
                                    </td>

                                    <td className="flex-center">
                                        <div className="action">
                                            <Tippy content="Download Video Solution"  animation="fade">
                                            <a onClick={() => {
                                                setEditData(data);
                                                toggleEditModal();
                                            }} className="see"><BsPencilSquare onClick={() => null} size={14}/></a>
                                            </Tippy>
                                            <Tippy content="Delete Class"  animation="fade">
                                                <a onClick={() => {
                                                    setDeleteId(data._id);
                                                    toggleDeleteModal();
                                                }} className="delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
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

        {showAddModal &&  <UploadAssignmentSolutionModal onContentAdded={handleContentAdded} onClose={toggleAddModal} />}
        {showEditModal &&  <EditCourseContentModal data={editData} onContentAdded={handleContentAdded} onClose={toggleEditModal} />}
        {deleteModal && <DeleteModal onAccept={handleDeleteCourseExamContent} onCancel={toggleDeleteModal} />}
        </StudentLayout>
    );
}

export default Index;