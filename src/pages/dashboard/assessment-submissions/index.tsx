import React, { useState, useEffect }  from 'react';
import './assessment-submissions.css';

import Layout from '../../../components/Layout/Layout';

import { IoMdCloudDownload } from 'react-icons/io';
import {  BsPencilSquare } from 'react-icons/bs';

import { toast } from 'react-toastify';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { getClasses, deleteClass } from '../../../services/classroom';
import { getPassExamContents, deletePassExamContent } from '../../../services/passExams';

import BeatLoader from "react-spinners/BeatLoader";

import moment from 'moment';
import {useTranslation} from "react-i18next";

const override = {
    marginTop: '20px'
  };



function Index() {
    const [submissions, setSubmissions] = useState([]);

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);


    const { t, i18n } = useTranslation();

    const rows: any = [
        {
            label: '#',
            name: 'num'
        },
        {
            label: (`${t('assessment_submission.data_table.title')}`),
            name: 'name'
        },
        {
            label: (`${t('assessment_submission.data_table.student_name')}`),
            name: 'name'
        },
        {
            label: (`${t('assessment_submission.data_table.question_file')}`),
            name: 'name'
        },
        {
            label: (`${t('assessment_submission.data_table.answer_pdf')}`),
            name: 'name'
        },
        {
            label: (`${t('assessment_submission.data_table.submitted_date')}`),
            name: 'name'
        },
        {
            label: (`${t('assessment_submission.data_table.created_date')}`),
            name: 'name'
        },
        {
            label: 'Action',
            name: 'action'
        }
    ]

    const handleGetClasses = ()  => {

        getClasses().then((res: any) => {
            if(res.ok) {
                setClasses(res.data.data);
            }
        }).catch(err => {
            console.log('error: ', err);
        })
    }


    const handleGetContent = () => {
        setLoading(true);
        getPassExamContents().then((res: any) => {
            console.log("ASSESSMENT SUBMISSIONS: ",res);
            setLoading(false);
            setSubmissions(res.data.data);
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
        <Layout title={t('assessment_submission.data_table.layout_title')} >
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
                                {submissions?.map((data: any, index: any) => <tr>
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
                               
                                            }} className="see"><IoMdCloudDownload onClick={() => null} size={14}/></a>
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
        </Layout>
    );
}

export default Index;