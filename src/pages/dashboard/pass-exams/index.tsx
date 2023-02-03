import React, { useState, useEffect }  from 'react';
import './pass-exams.css';

import Layout from '../../../components/Layout/Layout';

import { AddCourseContentModal, EditCourseContentModal, DeleteModal, PassExammodal  } from '../../../components';
import { IoMdCloudDownload } from 'react-icons/io';
import { AiOutlineCopy } from 'react-icons/ai';
import {  BsPencilSquare } from 'react-icons/bs';

import { toast } from 'react-toastify';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { getClasses, deleteClass } from '../../../services/classroom';
import { deleteCourseContent, getCourseContents } from '../../../services/courseContent';
import { getPassExamContents, deletePassExamContent } from '../../../services/passExams';

import BeatLoader from "react-spinners/BeatLoader";

import moment from 'moment';
import {useTranslation} from "react-i18next";



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

    const { t, i18n } = useTranslation();

    const rows: any = [
        {
            label: '#',
            name: 'num'
        },
        {
            label: (`${t('pass_exams.data_table.title')}`),
            name: 'name'
        },
        {
            label: (`${t('pass_exams.data_table.class')}`),
            name: 'name'
        },
        {
            label: (`${t('pass_exams.data_table.question_file')}`),
            name: 'name'
        },
        {
            label: (`${t('pass_exams.data_table.answer_pdf')}`),
            name: 'name'
        },
        {
            label: (`${t('pass_exams.data_table.answer_video')}`),
            name: 'name'
        },
        {
            label: (`${t('pass_exams.data_table.publish_date')}`),
            name: 'name'
        },
        {
            label: (`${t('pass_exams.data_table.created_date')}`),
            name: 'name'
        },
        {
            label: 'Action',
            name: 'action'
        }
    ]

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

    const handleDeletePassExamContent = () => {
        console.log('DELETE COURSE CONTENT');
        console.log(deleteId)
        deletePassExamContent(deleteId).then((res: any) => {
            if(res.ok) {
                toggleDeleteModal();
                handleGetContent();
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
        <Layout title={t('pass_exams.data_table.layout_title')}>
      <div className="section">
            <div className="parent-con">
                <div className="data-table">
                    <div className="top">
                        <div className="span">
                            <select name="" id="" className="select-field">
                                <option value="all">All</option>
                                {classes.map((classData: any, index: any) => <option key={index} value={classData._id}>{classData.name}</option>)}
                            </select>
                        </div>
                        {/* <form className="search">
                            <input type="search" name="" id="" placeholder="Find ..." />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form> */}
                        <button onClick={toggleAddModal} className="btn btn-primary btn-add">{t('pass_exams.data_table.button')}<i className="fas fa-plus"></i></button>
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

                                    <td className="flex-start">
                                        <p>{data?.class_room_id?.name}</p>
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

        {showAddModal &&  <PassExammodal onContentAdded={handleContentAdded} onClose={toggleAddModal} />}
        {showEditModal &&  <EditCourseContentModal data={editData} onContentAdded={handleContentAdded} onClose={toggleEditModal} />}
        {deleteModal && <DeleteModal onAccept={handleDeletePassExamContent} onCancel={toggleDeleteModal} />}
        </Layout>
    );
}

export default Index;