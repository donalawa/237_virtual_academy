import React, { useState, useEffect } from 'react';
import './CreateSpecialityModal.css';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';

import { toast } from 'react-toastify';

import { joinClass } from '../../../services/student';
import { createSpeciality } from '../../../services/specialities';

const initialValues= {
    name: '',
    fees: ''
}


function CreateSpecialityModal({ onClose, onSpecialityAdded } : any) {
    const [error, setError] = useState(null);


    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Class Id is required'),
        fees: Yup.string().required('Speciality Fees is required'),
    })


    const handleCreateSpeciality = (values: any) => {
        console.log('SPECIALITY VALS: ', values);
        let data = {    
            name: values.name,
            fees: values.fees
        }   
        createSpeciality(data).then((res: any) => {
            if(res.ok) {
                toast.success(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
                onSpecialityAdded();
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
            <div  className='add-modal-container create-speciality-modal'>
                <div className='modal-head'>
                    <p className="modal-title">Create Speciality</p>
                    <ImCancelCircle style={{cursor: 'pointer'}} onClick={onClose} size={22} color="#fff"/>
                </div>
                <div className='modal-content'>
                <form action="" className="auth-form">

                {error && <ErrorMessage error={error} visible={true} />}
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleCreateSpeciality}
                    validationSchema={validationSchema}
                >

                        <FormField  name="name" type="general" placeholder="Speciality Name"/>
                        
                        <FormField  name="fees" type="number" placeholder="Speciality Fees"/>

                        <Button isOutLined={true} isFullWidth={false} title="CREATE"/>
                        </Form>
                </form>
                </div>
            </div>
            <div className="modal-shadow" onClick={onClose}>
           
            </div>
        </div>
    );
}

export default CreateSpecialityModal;