import React, { useState, useEffect } from 'react';
import './JoinClassModal.css';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';

import { toast } from 'react-toastify';

import { joinClass } from '../../../services/student';

const initialValues= {
    class_id: '',
}


function JoinClassModal({ onClose, onClassAdded } : any) {
    const [error, setError] = useState(null);


    const validationSchema = Yup.object().shape({
        class_id: Yup.string().required('Class Id is required'),
    })


    const handleJoinClass = (values: any) => {
        console.log('CLASS NAME: ', values);
        let data = {    
            class_id: values.class_id,
            status: "pending"
        }   
        joinClass(data).then((res: any) => {
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
            <div  className='add-modal-container join-modal'>
                <div className='modal-head'>
                    <p className="modal-title">Enter Class Id</p>
                    <ImCancelCircle style={{cursor: 'pointer'}} onClick={onClose} size={22} color="#fff"/>
                </div>
                <div className='modal-content'>
                <form action="" className="auth-form">

                {error && <ErrorMessage error={error} visible={true} />}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleJoinClass}
                    validationSchema={validationSchema}
                >

                        <FormField  name="class_id" type="general" placeholder="Classroom Id"/>

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