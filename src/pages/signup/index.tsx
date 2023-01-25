
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './signup.css';
import { Link } from 'react-router-dom';
import Form from '../../components/form/components/Form/Form';
import FormField from '../../components/form/components/FormField/FormField';
import Button from '../../components/form/components/Button/Button';
import * as Yup from 'yup';
import AuthLayout from '../../components/form/components/Layout/AuthLayout';

import { registerUser } from '../../services/auth';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const initialValues= {
    username: '',
    email: '',
    password: '',
    confirm_password: ''
}

const Index = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required(`${t('username_required_error')}`),
        email: Yup.string().email(`${t('email_valid_error')}`).required(`${t('email_required_error')}`),
        password: Yup.string().min(4, `${t('password_length_error')}`).required(`${t('password_required_error')}`),
        confirm_password: Yup.string().min(4, `${t('password_length_error')}`).required(`${t('c_password_required_error')}`)
    })

    const handleRegister = (values : any) => {
        console.log('VALUES: ', values);

        if(values.password != values.confirm_password) {
            toast.error(`${t('password_match_error')}`, {
                pauseOnHover: false,
                closeOnClick: true,
            })

            return;
        }

        registerUser(values).then((res: any) => {
            // console.log('REGISTERED USER');
            // console.log(res);
            if(res.ok) {
                toast.success(`${t('registered_successfully')}`, {
                    pauseOnHover: false,
                    closeOnClick: true,
                  })
                setTimeout(() => {
                    navigate('/login');
                },2000)
            }else {
                toast.error(res.data.message, {
                    pauseOnHover: false,
                    closeOnClick: true,
                })
            }
        }).catch(err => {
            console.log('ERROR REGISTRATION', err);
            toast.error(`${t('register_failed_error')}`, {
                pauseOnHover: false,
                closeOnClick: true,
            })
        })
    }

    useEffect(() => {
        console.log('ran')
    },[]);


    return (
        <AuthLayout subTitle={`${t('create_account_sub')}`} title={`${t('create_account_title')}`} >
            <form action="" className="auth-form">
                <p>{`${t('register_form_titlle')}`}</p>
                <Form 
                    initialValues={initialValues}
                    onSubmit={handleRegister}
                    validationSchema={validationSchema}
                >

                        <FormField  name="username" type="text" placeholder={`${t('username_label')}`}/>

                        <FormField  name="email" type="email" placeholder="Email"/>

                        <FormField  name="password" type="password" placeholder={`${t('password_label')}`}/>

                        <FormField  name="confirm_password" type="password" placeholder={`${t('c_password_label')}`}/>

                        <Button title={`${t('register_text')}`}/>
                        </Form>
                </form>
                <p className="u-padding-bottom-small label-link">
                {`${t('r_account_text')}`}<Link to="/login" className="text-primary">{`${t('login_text')}`}</Link>
                </p>
            </AuthLayout>

    );
}

export default Index;