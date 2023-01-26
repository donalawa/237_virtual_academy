import React, { useState, useEffect } from 'react';
import './UploadAssignmentSolutionModal.css';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';
import { FaCloudUploadAlt, FaTrashAlt } from  'react-icons/fa';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import BeatLoader from "react-spinners/BeatLoader";
import ProgressBar from '../../Progress/Progress';


import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject} from 'firebase/storage';

import { firebaseApp } from '../../../utils/firebaseConfig';

import { createCourseContent } from '../../../services/courseContent';

import { getClasses, deleteClass } from '../../../services/classroom';
import { addPassExamContent } from '../../../services/passExams';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const initialValues= {
    title: '',
    publish_date: ''
}

const override = {
    marginTop: '20px'
  };



function UploadAssignmentSolutionModal({ onClose, onContentAdded } : any) {
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState<any>(null);
    const [selectedClassroom, setSelectedClassroom] = useState(null);
    // Exam Content


    // ASSIGNMENT
    const [isUploadingAssessmentVideo,  setIsUploadingAssessmentVideo] = useState(false);
    const [assessmentVideoProgress, setAssessmentVideoProgress] = useState(0);
    const [assessmentVideoUrl, setAssessmentVideoUrl] = useState('');

    const [assessmentPdfUrl, setAssessmentPdfUrl] = useState('');
    const [assessmentPdfProgress,  setAssessmentPdfProgress] = useState(0);
    const [isUploadingAssessmentPdf, setIsUploadingAssessmentPdf] = useState(false);

    const [showAssessmentVideoPreview, setShowAssessmentVideoPreview] = useState(false);

    // END OF ASSIGNEMTN
    const storage = getStorage(firebaseApp);
    

    // good
    const assessmentPdfFileRef: any = useRef(null);
    const assessmentVideoFileRef: any = useRef(null);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Accessment title is required'),
        publish_date: Yup.string().required('Please enter date to publish assessment'),
    })

    const handleGetClasses = ()  => {

        getClasses().then((res: any) => {
            console.log('RESPONSE GET: ', res);
            if(res.ok) {
                setClasses(res.data.data);
            }
        }).catch(err => {
            console.log('error: ', err);
        })
    }


    const deleteVideo = () =>  {
        const deleteRef = ref(storage, assessmentVideoUrl);
        deleteObject(deleteRef).then((res: any) => {
            console.log('RES DELETED', res);
        }).catch((err: any) => {
            console.log('ERROR DELETING');
        })
    }

    const uploadAssessmentVideo = (e: any) => {
        setIsUploadingAssessmentVideo(true);
        const videoFile: any = e.target.files[0];
        const storageRef = ref(storage, `videos/${Date.now()}-${videoFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, videoFile);

        console.log(e.target.files[0]);   
    
      uploadTask.on('state_changed', (snapshot: any)=>{
          const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setAssessmentVideoProgress(+uploadProgress);

      }, (error: any) => {
          console.log(error);
      },()=> {
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setAssessmentVideoUrl(downloadURL);
              console.log('URL', assessmentVideoUrl);
              console.log('VIDEO  URL: ', downloadURL);
              setShowAssessmentVideoPreview(true);
              setIsUploadingAssessmentVideo(false);
          });
      })
    }

    const uploadAnswerPdf = (e: any) => {
        setIsUploadingAssessmentPdf(true);
      const pdfFile: any = e.target.files[0];
      const storageRef = ref(storage, `pdf-content/${Date.now()}-${pdfFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, pdfFile);

      console.log(e.target.files[0]);   
  
    uploadTask.on('state_changed', (snapshot: any)=>{
        const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setAssessmentPdfProgress(+uploadProgress);

    }, (error: any) => {
        console.log(error);
    },()=> {
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setAssessmentPdfUrl(downloadURL);
            console.log('PDF  URL: ', downloadURL);
            setIsUploadingAssessmentPdf(false);
        });
    })
  }

    const handleAddCAssessmentContent = (values: any) => {
        setError(null);

        let data = {
            ...values,
            class_room_id: selectedClassroom,
            questions_file: assessmentPdfUrl,
            video_solution_url: assessmentVideoUrl
        }

        console.log('CONTENT', data);

        if(data.class_room_id == null || data.class_room_id == 'all') {
            setError('You have to select a clasroom for Assessment');
            return;
        }

        if(assessmentVideoUrl.length < 2 && assessmentPdfUrl.length < 2) {
            setError('Select Assessment Video Or Assessment Pdf');
            return;
        }

        console.log('ALL DATA: ', data);
        // return;
        addPassExamContent(data).then((res: any) => {
            if(res.ok) {
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                onContentAdded();
            }else {
                console.log(res)
                toast.error(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch((err: any) => {   
            console.log('ERROR CREATING: ', err);
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })

    }


    useEffect(() => {
        handleGetClasses();
    },[])

    
    return (
        <div>
            <div  className='modal-container'>
                <div className='modal-head'>
                    <p className="modal-title">Upload Assignment Solution</p>
                    <ImCancelCircle style={{cursor: 'pointer'}} onClick={onClose} size={22} color="#fff"/>
                </div>
                <div className='modal-content'>
                <form action="" className="auth-form">

                {error && <ErrorMessage error={error} visible={true} />}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleAddCAssessmentContent}
                    validationSchema={validationSchema}
                >
                        <p className="label-text">Title: </p>
                        <FormField  name="title" type="general" placeholder="Exam Title"/>
                        
                        <p className="label-text">Publish Date: </p>
                        <FormField  name="publish_date" type="date" placeholder="Published Date"/>


                        <p className="label-text">Select Classroom: </p>
                        <select onChange={(e: any) => setSelectedClassroom(e.target.value) } className="select-field-modal">
                            <option value="all">All</option>
                            {classes.map((classData: any, key: any) => <option key={key} value={classData._id}>{classData.name}</option>)}
                        </select>

                
               
                        
                        <div className='upload-content-container'>
                            <div className="content-upload-left">
                            {!showAssessmentVideoPreview && <div className="form-field-upload">
                                    <p className="label-text">Upload Assessment Video: </p>
                                    <div className="file-drop-upload" onClick={() => assessmentVideoFileRef.current.click()}>
                                    {!isUploadingAssessmentVideo && <FaCloudUploadAlt size={35} color="#FFA500" />}
                                    {isUploadingAssessmentVideo &&  <div style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <BeatLoader
                                            color="#623d91" 
                                            loading={isUploadingAssessmentVideo}
                                            cssOverride={override}
                                        />
                                        <p style={{fontSize: '14px'}}>Uploading Video</p>
                                    
                                            <ProgressBar bgcolor={'#6a1b9a'} completed={assessmentVideoProgress}/>
                                        
                                    </div>}
                                    {!isUploadingAssessmentVideo && <input ref={assessmentVideoFileRef} onChange={uploadAssessmentVideo} type="file" style={{width: '100%', height: '100%', display: 'none'}} accept="video/mp4,video/x-m4v,video/*"/>}
                                    </div>
                                
                                </div>}
                                {showAssessmentVideoPreview && <div className="video-container">
                                    <div className="delete-icon-video">
                                         <FaTrashAlt color='red' />
                                    </div>
                                    <video controls width="100%" height={'100%'} src={assessmentVideoUrl}></video>
                                </div>}
                            </div>

                          {assessmentPdfUrl.length < 2 &&  <div className="form-field-upload content-upload-right">
                            <p className="label-text">Upload Assessment Pdf: </p>
                            <div className="file-drop-upload" onClick={() => assessmentPdfFileRef.current.click()}>
                            {!isUploadingAssessmentPdf && <FaCloudUploadAlt size={35} color="#FFA500" />}
                                <input ref={assessmentPdfFileRef} onChange={uploadAnswerPdf} type="file" style={{width: '100%', height: '100%', display: 'none'}} accept="application/pdf,application/vnd.ms-excel"/>
                                {isUploadingAssessmentPdf &&  <div style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <BeatLoader
                                    color="#623d91" 
                                    loading={isUploadingAssessmentPdf}
                                    cssOverride={override}
                                />
                                <p style={{fontSize: '14px'}}>Uploading Content</p>
                            
                                    <ProgressBar bgcolor={'#6a1b9a'} completed={assessmentPdfProgress}/>
                                
                              </div>}
                        
                            </div>
                        </div>}

                        {assessmentPdfUrl.length > 2 &&
                            <div className="form-field-upload content-upload-right">
                            <p className="label-text" style={{textAlign: 'center'}}>Done</p>
                            </div>
                            }
                        </div>
               
                        <Button isOutLined={true} isFullWidth={false} title="CREATE CONTENT"/>

                        </Form>
                </form>
                </div>
            </div>
            <div className="modal-shadow" onClick={onClose}>
               
            </div>
        </div>
    );
}

export default UploadAssignmentSolutionModal;
