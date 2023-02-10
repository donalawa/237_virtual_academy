import React, { useState, useEffect } from 'react';
import './ReportModal.css';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';

import { toast } from 'react-toastify';

import { createReport, joinClass, joinSchool } from '../../../services/student';

const initialValues= {
    subject: '',
}


function ReportModal({ onClose, onReportSubmitted } : any) {
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const validationSchema = Yup.object().shape({
        subject: Yup.string().required('Subject required'),
    })


    const handleSubmitReport = (values: any) => {
        console.log('DETAILS: ', values);
        let data = {    
            ...values,
            message: message
        }   

        createReport(data).then((res: any) => {
            if(res.ok) {
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                onReportSubmitted();
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
                    <p className="modal-title">Report A Problem</p>
                    <ImCancelCircle style={{cursor: 'pointer'}} onClick={onClose} size={22} color="#fff"/>
                </div>
                <div className='modal-content'>
                <form action="" className="auth-form">

                {error && <ErrorMessage error={error} visible={true} />}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleSubmitReport}
                    validationSchema={validationSchema}
                >

                        <FormField  name="subject" type="general" placeholder="Subject"/>

                        <p className="label-text">Message: </p>
                        <textarea rows={8} onChange={(e: any) => setMessage(e.target.value)} value={message} className="textarea"></textarea>
                        <br />
                        <br />
                    

                        <Button isOutLined={true} isFullWidth={false} title="REPORT"/>
                        </Form>
                </form>
                </div>
            </div>
            <div className="modal-shadow" onClick={onClose}>
           
            </div>
        </div>
    );
}

export default ReportModal;