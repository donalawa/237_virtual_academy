import React, { useState, useEffect } from 'react';
import './AddCourseContentModal.css';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';
import { FaCloudUploadAlt } from  'react-icons/fa';

import { toast } from 'react-toastify';

import { createClass, getClasses, deleteClass } from '../../../services/classroom';

const initialValues= {
    title: '',
    description: '',
    expectation: '',
    publish_date: ''
}


function AddCourseContentModal({ onClose, onClassAdded } : any) {
    const [error, setError] = useState(null);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Class Name is required'),
        description: Yup.string(),
        expectation: Yup.string(),
        publish_date: Yup.string(),
    })

    const handleAddClass = (values: any) => {
        console.log('CLASS NAME: ', values);

        createClass(values).then((res: any) => {
            if(res.ok) {
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                onClassAdded();
            }else {
                console.log(res)
                toast.error(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {   
            console.log('ERROR CREATING: ', err);
            toast.error("ERROR", {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })

    }


    
    return (
        <div>
            <div  className='modal-container'>
                <div className='modal-head'>
                    <p className="modal-title">Add New Course Content</p>
                    <ImCancelCircle style={{cursor: 'pointer'}} onClick={onClose} size={22} color="#fff"/>
                </div>
                <div className='modal-content'>
                <form action="" className="auth-form">

                {error && <ErrorMessage error={error} visible={true} />}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleAddClass}
                    validationSchema={validationSchema}
                >
                        <p className="label-text">Title: </p>
                        <FormField  name="title" type="general" placeholder="Classroom Name"/>
                        
                        <p className="label-text">Description (optional): </p>
                        <FormField  name="description" type="general" placeholder="Short Description"/>

                        <p className="label-text">Expectation (optional): </p>
                        <FormField  name="expectation" type="general" placeholder="Expectation"/>

                        <p className="label-text">Publish Date: </p>
                        <FormField  name="publish_date" type="date" placeholder="Published Date"/>

                        <p className="label-text">Select Classroom: </p>
                        <select name="" id="" className="select-field-modal">
                            <option value="all">All</option>
                            <option value="math">Math Class IUGET</option>
                        </select>

                        <div className="form-field-upload">
                            <p className="label-text">Upload Video Content: </p>
                            <div className="file-drop-upload">
                                <FaCloudUploadAlt size={35} color="#FFA500" />
                            </div>
                        </div>

                        <div className="form-field-upload">
                            <p className="label-text">Upload Pdf Content: </p>
                            <div className="file-drop-upload">
                                <FaCloudUploadAlt size={35} color="#FFA500" />
                            </div>
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

export default AddCourseContentModal;