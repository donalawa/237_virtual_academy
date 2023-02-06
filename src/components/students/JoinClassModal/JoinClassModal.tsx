import React, { useState, useEffect } from 'react';
import './JoinClassModal.css';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';

import { toast } from 'react-toastify';

import { joinClass, joinSchool } from '../../../services/student';

const initialValues= {
    school_code: '',
    speciality_code: ''
}


function JoinClassModal({ onClose, onClassAdded } : any) {
    const [error, setError] = useState(null);


    const validationSchema = Yup.object().shape({
        school_code: Yup.string().required('School code is required'),
        speciality_code: Yup.string().required('Speciality code is required'),
    })


    const handleJoinSchool = (values: any) => {
        console.log('DETAILS: ', values);
        let data = {    
            ...values,
            status: "pending"
        }   

        joinSchool(data).then((res: any) => {
            if(res.ok) {
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                onClassAdded();
            }else {
                console.log(res)
                setError(res.data.message)
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
            <div  className='add-modal-container join-modal'>
                <div className='modal-head'>
                    <p className="modal-title">Apply For Ongoing Academic Year</p>
                    <ImCancelCircle style={{cursor: 'pointer'}} onClick={onClose} size={22} color="#fff"/>
                </div>
                <div className='modal-content'>
                <form action="" className="auth-form">

                {error && <ErrorMessage error={error} visible={true} />}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleJoinSchool}
                    validationSchema={validationSchema}
                >

                        <FormField  name="school_code" type="general" placeholder="School Code"/>

                        <FormField  name="speciality_code" type="general" placeholder="Speciality Code"/>

                        <Button isOutLined={true} isFullWidth={false} title="APPLY"/>
                        </Form>
                </form>
                </div>
            </div>
            <div className="modal-shadow" onClick={onClose}>
           
            </div>
        </div>
    );
}

export default JoinClassModal;