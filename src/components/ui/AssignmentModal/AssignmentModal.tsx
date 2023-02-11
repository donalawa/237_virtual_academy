import React, { useState, useEffect } from 'react';
import './AssignmentModal.css';
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
import { createAssessment } from '../../../services/assessment';
import { createAssignment } from '../../../services/assignment';


const override = {
    marginTop: '20px'
  };



function AssignmentModal({ onClose, onContentAdded } : any) {
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState<any>(null);
    const [selectedClassroom, setSelectedClassroom] = useState('all');
    // Exam Content
    let [answersFileType, setAnswersFileType] = useState('');

    // ASSIGNMENT
    const [isUploadingAssignemtnSolutionFile,  setIsUploadingAssignmentSolutionFile] = useState(false);
    const [assignmentSolutionProgress, setAssignmentSolutionProgress] = useState(0);
    const [assignmentSolutionUrl, setAssignmentSolutionUrl] = useState('');

    const [assignmentPdfUrl, setAssignmentPdfUrl] = useState('');
    const [assignmentPdfProgress,  setAssignmentPdfProgress] = useState(0);
    const [isUploadingAssignmentPdf, setIsUploadingAssignmentPdf] = useState(false);

    const [showAssignmentSolutionPreview, setShowAssignmentVideoSolutionPreview] = useState(false);
    const [showOtherFileCompleted, setShowOtherFileCompleted] = useState(false);

    // END OF ASSIGNEMTN
    const storage = getStorage(firebaseApp);

    const [initialValues, setInitialValues]= useState({
        title: '',
        publish_date: '',
        publish_answers_date: ''
    });
    

    // good
    const assignmentPdfFileRef: any = useRef(null);
    const assignmentSolutionFileRef: any = useRef(null);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Assignment title is required'),
        publish_date: Yup.string().required('Please enter date to publish assignment'),
        publish_answers_date: Yup.string()
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
        const deleteRef = ref(storage, assignmentSolutionUrl);
        deleteObject(deleteRef).then((res: any) => {
            console.log('RES DELETED', res);
        }).catch((err: any) => {
            console.log('ERROR DELETING');
        })
    }

    const uploadAssessmentSolution = (e: any) => {
        setIsUploadingAssignmentSolutionFile(true);
        console.log('FILE DATA:', e.target.files[0]);
        let fileType = e.target.files[0].type.split('/')[0];

        console.log(fileType);
        
        if(fileType == 'video') {
            setAnswersFileType('video');
        }else {
            setAnswersFileType('others')
        }

        const videoFile: any = e.target.files[0];
        const storageRef = ref(storage, `assessment/${Date.now()}-${videoFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, videoFile);

        // console.log(e.target.files[0]);   
   
    
      uploadTask.on('state_changed', (snapshot: any)=>{
          const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setAssignmentSolutionProgress(+uploadProgress);
         

      }, (error: any) => {
          console.log(error);
      },()=> {
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setAssignmentSolutionUrl(downloadURL);
              console.log('URL', assignmentSolutionUrl);
              console.log('VIDEO  URL: ', downloadURL);
              if(fileType == 'video') {
                setShowAssignmentVideoSolutionPreview(true);
              }else {
                  setShowOtherFileCompleted(true);
              }

              setIsUploadingAssignmentSolutionFile(false);
          });
      })
    }

    const uploadAssignmentPdf = (e: any) => {
        setIsUploadingAssignmentPdf(true);
      const pdfFile: any = e.target.files[0];
      const storageRef = ref(storage, `assessment/${Date.now()}-${pdfFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, pdfFile);

      console.log(e.target.files[0]);   
  
    uploadTask.on('state_changed', (snapshot: any)=>{
        const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setAssignmentPdfProgress(+uploadProgress);

    }, (error: any) => {
        console.log(error);
    },()=> {
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setAssignmentPdfUrl(downloadURL);
            console.log('PDF  URL: ', downloadURL);
            setIsUploadingAssignmentPdf(false);
        });
    })
  }

    const handleAddAssignmentContent = (values: any) => {
        setError(null);

        let data = {
            ...values,
            class_room_id: selectedClassroom,
            assignment_file: assignmentPdfUrl,
            answers_file: assignmentSolutionUrl,
            answers_file_type: answersFileType
        }

        console.log('CONTENT', data);
        console.log('FILE TYPE: ', answersFileType);


        if(data.class_room_id == null || data.class_room_id == 'all') {
            setError('You have to select a clasroom for Assignment');
            return;
        }

        if(assignmentPdfUrl.length < 2) {
            setError('Select Assignment Pdf');
            return;
        }

        if(assignmentSolutionUrl.length > 2) {
            if(data.publish_answers_date.length < 2) {
                setError('Select date to publish assignment solution.');
                return;
            }
        }

        // console.log('ALL DATA: ', data);
        // return;
        createAssignment(data).then((res: any) => {
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
            <div  className='modal-container teacher-add-assignment-modal'>
                <div className='modal-head'>
                    <p className="modal-title">Create Assignment</p>
                    <ImCancelCircle style={{cursor: 'pointer'}} onClick={onClose} size={22} color="#fff"/>
                </div>
                <div className='modal-content'>
                <form action="" className="auth-form">

                {error && <ErrorMessage error={error} visible={true} />}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleAddAssignmentContent}
                    validationSchema={validationSchema}
                >
                        <p className="label-text">Title: </p>
                        <FormField  name="title" type="general" placeholder="Assignment Title"/>
                        
                        <p className="label-text">Publish Date: </p>
                        <FormField  name="publish_date" type="date" placeholder="Published Date"/>


                        <p className="label-text">Select Classroom: </p>
                        <select onChange={(e: any) => setSelectedClassroom(e.target.value) } value={selectedClassroom} className="select-field-modal">
                            <option value="all">Select</option>
                            {classes.map((classData: any, key: any) => <option key={key} value={classData._id}>{classData.name}</option>)}
                        </select>

                
               
                        
                        <div className='upload-content-container'>
                     
                          {assignmentPdfUrl.length < 2 &&  <div className="form-field-upload content-upload-left">
                            <p className="label-text">Upload Assignment File: </p>
                            <div className="file-drop-upload" onClick={() => assignmentPdfFileRef.current.click()}>
                            {!isUploadingAssignmentPdf && <FaCloudUploadAlt size={35} color="#FFA500" />}
                                <input ref={assignmentPdfFileRef} onChange={uploadAssignmentPdf} type="file" style={{width: '100%', height: '100%', display: 'none'}} accept="application/pdf,application/vnd.ms-excel"/>
                                {isUploadingAssignmentPdf &&  <div style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                              <BeatLoader
                                    color="#623d91" 
                                    loading={isUploadingAssignmentPdf}
                                    cssOverride={override}
                                />
                                <p style={{fontSize: '14px'}}>Uploading Content</p>
                            
                                    <ProgressBar bgcolor={'#6a1b9a'} completed={assignmentPdfProgress}/>
                                
                              </div>}
                        
                            </div>
                        </div>}

                        {assignmentPdfUrl.length > 2 &&
                            <div className="form-field-upload content-upload-right">
                            <p className="label-text" style={{textAlign: 'center'}}>Done</p>
                            </div>
                            }


                        <div className="content-upload-right">
                            {assignmentSolutionUrl.length < 2 && <div className="form-field-upload">
                                    <p className="label-text">Upload Solution File: </p>
                                    <div className="file-drop-upload" onClick={() => assignmentSolutionFileRef.current.click()}>
                                    {!isUploadingAssignemtnSolutionFile && <FaCloudUploadAlt size={35} color="#FFA500" />}
                                    {isUploadingAssignemtnSolutionFile &&  <div style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <BeatLoader
                                            color="#623d91" 
                                            loading={isUploadingAssignemtnSolutionFile}
                                            cssOverride={override}
                                        />
                                        <p style={{fontSize: '14px'}}>Uploading Solution</p>
                                    
                                            <ProgressBar bgcolor={'#6a1b9a'} completed={assignmentSolutionProgress}/>
                                        
                                    </div>}
                                    {!isUploadingAssignemtnSolutionFile && <input ref={assignmentSolutionFileRef} onChange={uploadAssessmentSolution} type="file" style={{width: '100%', height: '100%', display: 'none'}} accept="application/pdf,application/vnd.ms-excel,video/mp4,video/x-m4v,video/*"/>}
                                    </div>
                                
                                </div>}
                                {showAssignmentSolutionPreview && <div className="video-container">
                                    <div className="delete-icon-video">
                                         <FaTrashAlt color='red' />
                                    </div>
                                    <video controls width="100%" height={'100%'} src={assignmentSolutionUrl}></video>
                                </div>}
                                {showOtherFileCompleted &&
                                      <div className="form-field-upload content-upload-right">
                                      <p className="label-text" style={{textAlign: 'center'}}>Done</p>
                                      </div>
                                }
                            </div>

                        </div>

                       
                        <p className="label-text">Publish Solution Date: </p>
                        <FormField  name="publish_answers_date" type="date" placeholder="Published Solution Date"/>

               
                        <Button isOutLined={true} isFullWidth={false} title="CREATE ASSIGNMENT"/>

                        </Form>
                </form>
                </div>
            </div>
            <div className="modal-shadow" onClick={onClose}>
               
            </div>
        </div>
    );
}

export default AssignmentModal;
