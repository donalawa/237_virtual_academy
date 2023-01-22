import React, { useState } from 'react';
import './AddClassModal.css';
import * as Yup from 'yup';
import Form from '../../form/components/Form/Form';
import FormField from '../../form/components/FormField/FormField';
import Button from '../../form/components/Button/Button';
import ErrorMessage from '../../form/components/ErrorMessage/ErrorMessage';
import { ImCancelCircle } from 'react-icons/im';

const initialValues= {
    classname: '',
}


function AddClassModal({ onClose } : any) {
    const [error, setError] = useState(null);
    const validationSchema = Yup.object().shape({
        classname: Yup.string().required('Class Name is required'),
    })

    const handleAddClass = () => {

    }
    
    return (
        <div>
            <div  className='modal-container'>
                <div className='modal-head'>
                    <p className="modal-title">Add New Classroom</p>
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

                        <FormField  name="classname" type="general" placeholder="Classroom Name"/>

                        <Button isOutLined={true} isFullWidth={false} title="CREATE CLASSROOM"/>
                        </Form>
                </form>
                </div>
            </div>
            <div className="modal-shadow" onClick={onClose}>
           
            </div>
        </div>
    );
}

export default AddClassModal;